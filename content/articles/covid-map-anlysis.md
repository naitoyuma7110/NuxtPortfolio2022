---
title: コロナ感染者のオープンデータを使用した分析マップ作成
description: 東京都_新型コロナウイルス感染症陽性者数（区市町村別)から csv データをダウンロードして取得する
tags: ['python', 'pandas', '統計学', 'データ分析', '大気圧', '浮力']
createdAt: 2022/10/08
---

# コロナ感染者のオープンデータを使用した分析マップ作成

## 使用するデータの取得

[東京都\_新型コロナウイルス感染症陽性者数（区市町村別）](https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000085/resource/48c59f92-deae-44d0-a653-72576543df4f)から csv データをダウンロードして取得する

```python
import pandas as pd

df = pd.read_csv('130001_tokyo_covid19_positive_cases_by_municipality.csv')
df

```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>全国地方公共団体コード</th>
      <th>都道府県名</th>
      <th>市区町村名</th>
      <th>公表_年月日</th>
      <th>集計区分</th>
      <th>陽性者数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>131016.0</td>
      <td>東京都</td>
      <td>千代田区</td>
      <td>2020-03-31</td>
      <td>市区町村</td>
      <td>3</td>
    </tr>
    <tr>
      <th>1</th>
      <td>131024.0</td>
      <td>東京都</td>
      <td>中央区</td>
      <td>2020-03-31</td>
      <td>市区町村</td>
      <td>19</td>
    </tr>
    <tr>
      <th>2</th>
      <td>131032.0</td>
      <td>東京都</td>
      <td>港区</td>
      <td>2020-03-31</td>
      <td>市区町村</td>
      <td>39</td>
    </tr>
    <tr>
      <th>3</th>
      <td>131041.0</td>
      <td>東京都</td>
      <td>新宿区</td>
      <td>2020-03-31</td>
      <td>市区町村</td>
      <td>22</td>
    </tr>
    <tr>
      <th>4</th>
      <td>131059.0</td>
      <td>東京都</td>
      <td>文京区</td>
      <td>2020-03-31</td>
      <td>市区町村</td>
      <td>4</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>58171</th>
      <td>134015.0</td>
      <td>東京都</td>
      <td>八丈町</td>
      <td>2022-09-25</td>
      <td>市区町村</td>
      <td>676</td>
    </tr>
    <tr>
      <th>58172</th>
      <td>134023.0</td>
      <td>東京都</td>
      <td>青ヶ島村</td>
      <td>2022-09-25</td>
      <td>市区町村</td>
      <td>7</td>
    </tr>
    <tr>
      <th>58173</th>
      <td>134210.0</td>
      <td>東京都</td>
      <td>小笠原村</td>
      <td>2022-09-25</td>
      <td>市区町村</td>
      <td>367</td>
    </tr>
    <tr>
      <th>58174</th>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>2022-09-25</td>
      <td>都外</td>
      <td>276485</td>
    </tr>
    <tr>
      <th>58175</th>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>2022-09-25</td>
      <td>調査中</td>
      <td>2077</td>
    </tr>
  </tbody>
</table>
<p>58176 rows × 6 columns</p>
</div>

東京都の各地区のマップデータ、緯度、経度情報をダウンロード

```python
df_city = pd.read_csv('city.csv')
df_city

```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>市区町村名</th>
      <th>緯度</th>
      <th>経度</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>千代田区</td>
      <td>35.694031</td>
      <td>139.753772</td>
    </tr>
    <tr>
      <th>1</th>
      <td>中央区</td>
      <td>35.670639</td>
      <td>139.771989</td>
    </tr>
    <tr>
      <th>2</th>
      <td>港区</td>
      <td>35.658081</td>
      <td>139.751508</td>
    </tr>
    <tr>
      <th>3</th>
      <td>新宿区</td>
      <td>35.693825</td>
      <td>139.703356</td>
    </tr>
    <tr>
      <th>4</th>
      <td>文京区</td>
      <td>35.707869</td>
      <td>139.752437</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>57</th>
      <td>三宅村</td>
      <td>34.075757</td>
      <td>139.478434</td>
    </tr>
    <tr>
      <th>58</th>
      <td>御蔵島村</td>
      <td>33.897380</td>
      <td>139.595802</td>
    </tr>
    <tr>
      <th>59</th>
      <td>八丈町</td>
      <td>33.112789</td>
      <td>139.788992</td>
    </tr>
    <tr>
      <th>60</th>
      <td>青ヶ島村</td>
      <td>32.466533</td>
      <td>139.763611</td>
    </tr>
    <tr>
      <th>61</th>
      <td>小笠原村</td>
      <td>27.094429</td>
      <td>142.191845</td>
    </tr>
  </tbody>
</table>
<p>62 rows × 3 columns</p>
</div>

## データの前処理

### 欠損データの確認

```python
df.isnull().sum()

```

    全国地方公共団体コード    1818
    都道府県名          1818
    市区町村名          1818
    公表_年月日            0
    集計区分              0
    陽性者数              0
    dtype: int64

全 58176 件中、市区町村名の欠損が 1818 件あることが分かる。  
欠損を持つデータに偏りがないものとして、欠損項目を持つデータを削除する。

```python
df = df.dropna(how='any')
df
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>全国地方公共団体コード</th>
      <th>都道府県名</th>
      <th>市区町村名</th>
      <th>公表_年月日</th>
      <th>集計区分</th>
      <th>陽性者数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>131016.0</td>
      <td>東京都</td>
      <td>千代田区</td>
      <td>2020-03-31</td>
      <td>市区町村</td>
      <td>3</td>
    </tr>
    <tr>
      <th>1</th>
      <td>131024.0</td>
      <td>東京都</td>
      <td>中央区</td>
      <td>2020-03-31</td>
      <td>市区町村</td>
      <td>19</td>
    </tr>
    <tr>
      <th>2</th>
      <td>131032.0</td>
      <td>東京都</td>
      <td>港区</td>
      <td>2020-03-31</td>
      <td>市区町村</td>
      <td>39</td>
    </tr>
    <tr>
      <th>3</th>
      <td>131041.0</td>
      <td>東京都</td>
      <td>新宿区</td>
      <td>2020-03-31</td>
      <td>市区町村</td>
      <td>22</td>
    </tr>
    <tr>
      <th>4</th>
      <td>131059.0</td>
      <td>東京都</td>
      <td>文京区</td>
      <td>2020-03-31</td>
      <td>市区町村</td>
      <td>4</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>58169</th>
      <td>133817.0</td>
      <td>東京都</td>
      <td>三宅村</td>
      <td>2022-09-25</td>
      <td>市区町村</td>
      <td>261</td>
    </tr>
    <tr>
      <th>58170</th>
      <td>133825.0</td>
      <td>東京都</td>
      <td>御蔵島村</td>
      <td>2022-09-25</td>
      <td>市区町村</td>
      <td>62</td>
    </tr>
    <tr>
      <th>58171</th>
      <td>134015.0</td>
      <td>東京都</td>
      <td>八丈町</td>
      <td>2022-09-25</td>
      <td>市区町村</td>
      <td>676</td>
    </tr>
    <tr>
      <th>58172</th>
      <td>134023.0</td>
      <td>東京都</td>
      <td>青ヶ島村</td>
      <td>2022-09-25</td>
      <td>市区町村</td>
      <td>7</td>
    </tr>
    <tr>
      <th>58173</th>
      <td>134210.0</td>
      <td>東京都</td>
      <td>小笠原村</td>
      <td>2022-09-25</td>
      <td>市区町村</td>
      <td>367</td>
    </tr>
  </tbody>
</table>
<p>56358 rows × 6 columns</p>
</div>

```python
df.isnull().sum()

```

    全国地方公共団体コード    0
    都道府県名          0
    市区町村名          0
    公表_年月日         0
    集計区分           0
    陽性者数           0
    dtype: int64

欠損データは 0 件となった。

### 外れ値の検出

このデータにおける陽性者について  
世田谷区に絞ってグラフ化して推移を見ると累計陽性者数であることがわかる

```python
df[df['市区町村名'] == '世田谷区']['陽性者数'].plot.line()

```

<img src="/img/md/covid-map-anlysis_files/covid-map-anlysis_15_1.png">

describe メソッドを使用し陽性者の行数、平均値、標準偏差、最小値、四分位数、最大値を算出

```python
df['陽性者数'].describe()
```

    count     56358.000000
    mean       8296.075056
    std       18965.178507
    min           0.000000
    25%          68.000000
    50%        1042.000000
    75%        6842.750000
    max      207125.000000
    Name: 陽性者数, dtype: float64

陽性者数について箱ひげ図を作成する

```python
df['陽性者数'].plot.box()

```

<img src="/img/md/covid-map-anlysis_files/covid-map-anlysis_19_2.png">

プロットした箱ひげ図を見ると最小値が 0 付近にあること、また最大値が 200000 より少し上となっている。  
最大値 207125 を考慮しても外れ値はないと思われる

## データ処理

公表日が 2021-08-03 のものに絞る

```python
df = df[df['公表_年月日'] == '2021-08-03']
df

```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>全国地方公共団体コード</th>
      <th>都道府県名</th>
      <th>市区町村名</th>
      <th>公表_年月日</th>
      <th>集計区分</th>
      <th>陽性者数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>31360</th>
      <td>131016.0</td>
      <td>東京都</td>
      <td>千代田区</td>
      <td>2021-08-03</td>
      <td>市区町村</td>
      <td>1195</td>
    </tr>
    <tr>
      <th>31361</th>
      <td>131024.0</td>
      <td>東京都</td>
      <td>中央区</td>
      <td>2021-08-03</td>
      <td>市区町村</td>
      <td>3682</td>
    </tr>
    <tr>
      <th>31362</th>
      <td>131032.0</td>
      <td>東京都</td>
      <td>港区</td>
      <td>2021-08-03</td>
      <td>市区町村</td>
      <td>7176</td>
    </tr>
    <tr>
      <th>31363</th>
      <td>131041.0</td>
      <td>東京都</td>
      <td>新宿区</td>
      <td>2021-08-03</td>
      <td>市区町村</td>
      <td>11944</td>
    </tr>
    <tr>
      <th>31364</th>
      <td>131059.0</td>
      <td>東京都</td>
      <td>文京区</td>
      <td>2021-08-03</td>
      <td>市区町村</td>
      <td>3432</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>31417</th>
      <td>133817.0</td>
      <td>東京都</td>
      <td>三宅村</td>
      <td>2021-08-03</td>
      <td>市区町村</td>
      <td>5</td>
    </tr>
    <tr>
      <th>31418</th>
      <td>133825.0</td>
      <td>東京都</td>
      <td>御蔵島村</td>
      <td>2021-08-03</td>
      <td>市区町村</td>
      <td>2</td>
    </tr>
    <tr>
      <th>31419</th>
      <td>134015.0</td>
      <td>東京都</td>
      <td>八丈町</td>
      <td>2021-08-03</td>
      <td>市区町村</td>
      <td>9</td>
    </tr>
    <tr>
      <th>31420</th>
      <td>134023.0</td>
      <td>東京都</td>
      <td>青ヶ島村</td>
      <td>2021-08-03</td>
      <td>市区町村</td>
      <td>0</td>
    </tr>
    <tr>
      <th>31421</th>
      <td>134210.0</td>
      <td>東京都</td>
      <td>小笠原村</td>
      <td>2021-08-03</td>
      <td>市区町村</td>
      <td>5</td>
    </tr>
  </tbody>
</table>
<p>62 rows × 6 columns</p>
</div>

この DataFrame(表)と各地区の座標情報の Dataframe を組み合わせる。

```python
df = pd.merge(df, df_city, how='inner')
df

```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }

</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>全国地方公共団体コード</th>
      <th>都道府県名</th>
      <th>市区町村名</th>
      <th>公表_年月日</th>
      <th>集計区分</th>
      <th>陽性者数</th>
      <th>緯度</th>
      <th>経度</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>131016.0</td>
      <td>東京都</td>
      <td>千代田区</td>
      <td>2021-08-03</td>
      <td>市区町村</td>
      <td>1195</td>
      <td>35.694031</td>
      <td>139.753772</td>
    </tr>
    <tr>
      <th>1</th>
      <td>131024.0</td>
      <td>東京都</td>
      <td>中央区</td>
      <td>2021-08-03</td>
      <td>市区町村</td>
      <td>3682</td>
      <td>35.670639</td>
      <td>139.771989</td>
    </tr>
    <tr>
      <th>2</th>
      <td>131032.0</td>
      <td>東京都</td>
      <td>港区</td>
      <td>2021-08-03</td>
      <td>市区町村</td>
      <td>7176</td>
      <td>35.658081</td>
      <td>139.751508</td>
    </tr>
    <tr>
      <th>3</th>
      <td>131041.0</td>
      <td>東京都</td>
      <td>新宿区</td>
      <td>2021-08-03</td>
      <td>市区町村</td>
      <td>11944</td>
      <td>35.693825</td>
      <td>139.703356</td>
    </tr>
    <tr>
      <th>4</th>
      <td>131059.0</td>
      <td>東京都</td>
      <td>文京区</td>
      <td>2021-08-03</td>
      <td>市区町村</td>
      <td>3432</td>
      <td>35.707869</td>
      <td>139.752437</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>57</th>
      <td>133817.0</td>
      <td>東京都</td>
      <td>三宅村</td>
      <td>2021-08-03</td>
      <td>市区町村</td>
      <td>5</td>
      <td>34.075757</td>
      <td>139.478434</td>
    </tr>
    <tr>
      <th>58</th>
      <td>133825.0</td>
      <td>東京都</td>
      <td>御蔵島村</td>
      <td>2021-08-03</td>
      <td>市区町村</td>
      <td>2</td>
      <td>33.897380</td>
      <td>139.595802</td>
    </tr>
    <tr>
      <th>59</th>
      <td>134015.0</td>
      <td>東京都</td>
      <td>八丈町</td>
      <td>2021-08-03</td>
      <td>市区町村</td>
      <td>9</td>
      <td>33.112789</td>
      <td>139.788992</td>
    </tr>
    <tr>
      <th>60</th>
      <td>134023.0</td>
      <td>東京都</td>
      <td>青ヶ島村</td>
      <td>2021-08-03</td>
      <td>市区町村</td>
      <td>0</td>
      <td>32.466533</td>
      <td>139.763611</td>
    </tr>
    <tr>
      <th>61</th>
      <td>134210.0</td>
      <td>東京都</td>
      <td>小笠原村</td>
      <td>2021-08-03</td>
      <td>市区町村</td>
      <td>5</td>
      <td>27.094429</td>
      <td>142.191845</td>
    </tr>
  </tbody>
</table>
<p>62 rows × 8 columns</p>
</div>

陽性者情報の DF の市区町村名に合致した部分に緯度、経度情報が追加された。  
how=inner で内部結合を指定している。  
内部結合では合致しないデータは除外されるが、今回 2 つの DF の市区長村データは不足がないため、除外データはない

## 視覚化

plotly で地図を使用した視覚化を実行できる

プロットするポイントを指定
scatter_mapbox メソッドの引数に(DataFrame, DataFrame 内の緯度カラム,経度カラム)

update_layout でマップを呼び出している

```python
import plotly.express as px

fig = px.scatter_mapbox(df, lat='緯度', lon='経度')
fig.update_layout(mapbox_style="open-street-map")
fig.show()

```

<img src="/img/md/covid-map-anlysis_files/map1.png">

各地区の座標にプロットできた

ここに陽性者数の情報をプロットの大きさで視覚化する

```python
fig = px.scatter_mapbox(df, lat='緯度', lon='経度', size='陽性者数')
fig.update_layout(mapbox_style="open-street-map")
fig.show()

```

<img src="/img/md/covid-map-anlysis_files/map2.png">

jupyterLab 上であればホバー時の情報表示、マップの操作が可能

ある時点における、コロナ陽性者の数をマップ上に表現できた

出典：https://axross-recipe.com/recipes/263
