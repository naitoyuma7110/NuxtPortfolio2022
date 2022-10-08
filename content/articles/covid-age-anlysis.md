---
title: Pythonによる東京コロナ感染者情報を使用した年代別人数推移のグラフ作成
description: 東京都オープンデータカタログから東京都 新型コロナウイルス感染症新規陽性者数についてのCSVデータをダウウンロード
tags: ['python', 'pandas', '統計学', 'データ分析', '分析マップ']
createdAt: 2022/10/08
---

# 東京コロナ感染者情報を使用した年代別人数推移のグラフ作成

## データの取得

[東京都オープンデータカタログ](https://www.youtube.com/watch?v=9XEX4mZFOhA&t=16058s)から東京都 新型コロナウイルス感染症新規陽性者数についての CSV データをダウウンロード

データを Jupyter で読み込み出力

```python
import pandas as pd


df = pd.read_csv('130001_tokyo_covid19_patients_2021.csv')
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
      <th>No</th>
      <th>全国地方公共団体コード</th>
      <th>都道府県名</th>
      <th>市区町村名</th>
      <th>公表_年月日</th>
      <th>発症_年月日</th>
      <th>確定_年月日</th>
      <th>患者_居住地</th>
      <th>患者_年代</th>
      <th>患者_性別</th>
      <th>患者_職業</th>
      <th>患者_状態</th>
      <th>患者_症状</th>
      <th>患者_渡航歴の有無フラグ</th>
      <th>患者_接触歴の有無フラグ</th>
      <th>備考</th>
      <th>退院済フラグ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>60132</td>
      <td>130001</td>
      <td>東京都</td>
      <td>NaN</td>
      <td>2021-01-01</td>
      <td>2020-12-27</td>
      <td>2020-12-31</td>
      <td>都内</td>
      <td>10代</td>
      <td>男性</td>
      <td>学生</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>60133</td>
      <td>130001</td>
      <td>東京都</td>
      <td>NaN</td>
      <td>2021-01-01</td>
      <td>NaN</td>
      <td>2020-12-27</td>
      <td>都内</td>
      <td>40代</td>
      <td>男性</td>
      <td>－</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>60134</td>
      <td>130001</td>
      <td>東京都</td>
      <td>NaN</td>
      <td>2021-01-01</td>
      <td>2020-12-24</td>
      <td>2020-12-29</td>
      <td>都内</td>
      <td>10代</td>
      <td>女性</td>
      <td>－</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>60135</td>
      <td>130001</td>
      <td>東京都</td>
      <td>NaN</td>
      <td>2021-01-01</td>
      <td>NaN</td>
      <td>2020-12-28</td>
      <td>都内</td>
      <td>50代</td>
      <td>男性</td>
      <td>－</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>60136</td>
      <td>130001</td>
      <td>東京都</td>
      <td>NaN</td>
      <td>2021-01-01</td>
      <td>2020-12-29</td>
      <td>2020-12-31</td>
      <td>都内</td>
      <td>40代</td>
      <td>女性</td>
      <td>－</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>1.0</td>
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
      <td>...</td>
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
      <th>322743</th>
      <td>378187</td>
      <td>130001</td>
      <td>東京都</td>
      <td>NaN</td>
      <td>2021-12-31</td>
      <td>NaN</td>
      <td>2021-12-30</td>
      <td>都内</td>
      <td>70代</td>
      <td>男性</td>
      <td>－</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>322744</th>
      <td>378188</td>
      <td>130001</td>
      <td>東京都</td>
      <td>NaN</td>
      <td>2021-12-31</td>
      <td>2021-12-26</td>
      <td>2021-12-29</td>
      <td>都内</td>
      <td>20代</td>
      <td>男性</td>
      <td>接客業</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>322745</th>
      <td>378189</td>
      <td>130001</td>
      <td>東京都</td>
      <td>NaN</td>
      <td>2021-12-31</td>
      <td>2021-12-24</td>
      <td>2021-12-27</td>
      <td>都内</td>
      <td>20代</td>
      <td>女性</td>
      <td>医療従事者</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>322746</th>
      <td>378190</td>
      <td>130001</td>
      <td>東京都</td>
      <td>NaN</td>
      <td>2021-12-31</td>
      <td>2021-12-21</td>
      <td>2021-12-28</td>
      <td>都内</td>
      <td>50代</td>
      <td>女性</td>
      <td>主婦</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>322747</th>
      <td>378191</td>
      <td>130001</td>
      <td>東京都</td>
      <td>NaN</td>
      <td>2021-12-31</td>
      <td>2021-12-26</td>
      <td>2021-12-27</td>
      <td>都外</td>
      <td>40代</td>
      <td>男性</td>
      <td>医療従事者</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>1.0</td>
    </tr>
  </tbody>
</table>
<p>322748 rows × 17 columns</p>
</div>

322748 件 × 17 項目

データの欠損確認
数値は欠損した値の数を表す

## データの加工

```python
df.isnull().sum()
```

    No                   0
    全国地方公共団体コード          0
    都道府県名                0
    市区町村名           322748
    公表_年月日               0
    発症_年月日           94766
    確定_年月日               0
    患者_居住地               0
    患者_年代                0
    患者_性別                0
    患者_職業                2
    患者_状態           322748
    患者_症状           322748
    患者_渡航歴の有無フラグ    322748
    患者_接触歴の有無フラグ    193925
    備考              322748
    退院済フラグ               1
    dtype: int64

年代ごとの人数を算出する

```python
df['患者_年代'].value_counts()
```

    20代       93321
    30代       63398
    40代       51258
    50代       38101
    10代       26261
    10歳未満     15569
    60代       14906
    70代       10152
    80代        7192
    90代        2447
    100歳以上      139
    －             3
    -             1
    Name: 患者_年代, dtype: int64

group メソッドを使用し「公表年月日」ごと、また「年代」ごとをグループとみなし人数を算出する。

```python
df_groupby = df.groupby(['公表_年月日', '患者_年代']).count()
df_groupby

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
      <th></th>
      <th>No</th>
      <th>全国地方公共団体コード</th>
      <th>都道府県名</th>
      <th>市区町村名</th>
      <th>発症_年月日</th>
      <th>確定_年月日</th>
      <th>患者_居住地</th>
      <th>患者_性別</th>
      <th>患者_職業</th>
      <th>患者_状態</th>
      <th>患者_症状</th>
      <th>患者_渡航歴の有無フラグ</th>
      <th>患者_接触歴の有無フラグ</th>
      <th>備考</th>
      <th>退院済フラグ</th>
    </tr>
    <tr>
      <th>公表_年月日</th>
      <th>患者_年代</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="5" valign="top">2021-01-01</th>
      <th>10代</th>
      <td>30</td>
      <td>30</td>
      <td>30</td>
      <td>0</td>
      <td>14</td>
      <td>30</td>
      <td>30</td>
      <td>30</td>
      <td>30</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>14</td>
      <td>0</td>
      <td>30</td>
    </tr>
    <tr>
      <th>10歳未満</th>
      <td>16</td>
      <td>16</td>
      <td>16</td>
      <td>0</td>
      <td>8</td>
      <td>16</td>
      <td>16</td>
      <td>16</td>
      <td>16</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>15</td>
      <td>0</td>
      <td>16</td>
    </tr>
    <tr>
      <th>20代</th>
      <td>236</td>
      <td>236</td>
      <td>236</td>
      <td>0</td>
      <td>161</td>
      <td>236</td>
      <td>236</td>
      <td>236</td>
      <td>236</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>63</td>
      <td>0</td>
      <td>236</td>
    </tr>
    <tr>
      <th>30代</th>
      <td>144</td>
      <td>144</td>
      <td>144</td>
      <td>0</td>
      <td>90</td>
      <td>144</td>
      <td>144</td>
      <td>144</td>
      <td>144</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>41</td>
      <td>0</td>
      <td>144</td>
    </tr>
    <tr>
      <th>40代</th>
      <td>134</td>
      <td>134</td>
      <td>134</td>
      <td>0</td>
      <td>84</td>
      <td>134</td>
      <td>134</td>
      <td>134</td>
      <td>134</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>39</td>
      <td>0</td>
      <td>134</td>
    </tr>
    <tr>
      <th>...</th>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
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
      <th rowspan="5" valign="top">2021-12-31</th>
      <th>40代</th>
      <td>11</td>
      <td>11</td>
      <td>11</td>
      <td>0</td>
      <td>5</td>
      <td>11</td>
      <td>11</td>
      <td>11</td>
      <td>11</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>3</td>
      <td>0</td>
      <td>11</td>
    </tr>
    <tr>
      <th>50代</th>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>0</td>
      <td>8</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>5</td>
      <td>0</td>
      <td>10</td>
    </tr>
    <tr>
      <th>60代</th>
      <td>6</td>
      <td>6</td>
      <td>6</td>
      <td>0</td>
      <td>6</td>
      <td>6</td>
      <td>6</td>
      <td>6</td>
      <td>6</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>6</td>
    </tr>
    <tr>
      <th>70代</th>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>0</td>
      <td>1</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>3</td>
    </tr>
    <tr>
      <th>80代</th>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>0</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
<p>3531 rows × 15 columns</p>
</div>

## グラフ化

視覚化しやすいように番号を振りなおす  
また必要な項目のみ取り出す(No は人数)

```python
df_groupby = df_groupby.reset_index()[['公表_年月日', '患者_年代', 'No']]
df_groupby
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
      <th>公表_年月日</th>
      <th>患者_年代</th>
      <th>No</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2021-01-01</td>
      <td>10代</td>
      <td>30</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2021-01-01</td>
      <td>10歳未満</td>
      <td>16</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2021-01-01</td>
      <td>20代</td>
      <td>236</td>
    </tr>
    <tr>
      <th>3</th>
      <td>2021-01-01</td>
      <td>30代</td>
      <td>144</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2021-01-01</td>
      <td>40代</td>
      <td>134</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>3526</th>
      <td>2021-12-31</td>
      <td>40代</td>
      <td>11</td>
    </tr>
    <tr>
      <th>3527</th>
      <td>2021-12-31</td>
      <td>50代</td>
      <td>10</td>
    </tr>
    <tr>
      <th>3528</th>
      <td>2021-12-31</td>
      <td>60代</td>
      <td>6</td>
    </tr>
    <tr>
      <th>3529</th>
      <td>2021-12-31</td>
      <td>70代</td>
      <td>3</td>
    </tr>
    <tr>
      <th>3530</th>
      <td>2021-12-31</td>
      <td>80代</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
<p>3531 rows × 3 columns</p>
</div>

X 軸に公表年月日、Y 軸に人数を指定し、年代グループごとに色分けしてプロットする

```python
import plotly.express as px

fig = px.line(df_groupby, x='公表_年月日', y='No', color='患者_年代')
fig.show()

```

<img src="/img/md/covid-age/newplot.png">

Jupiter 上では選択した年代の表示、非表示の切り替えが可能

出典：https://axross-recipe.com/recipes/255
