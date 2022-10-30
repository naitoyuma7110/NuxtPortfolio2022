---
title: Python と統計検定で、回帰モデルを用いて市場反応分析を実践する(part1 相関分析)
description: 上記は母集団から抽出されたサンプルに基づいた相関係数で標本相関係数と呼ばれる.母集団の相関を判断するには、母集団の相関係数が 0 ではない事を証明する(無相関の検定)
tags: ['統計学', '相関係数', '相関分析', '散布図']
createdAt: 2022/10/31
---

## Python と統計検定で、回帰モデルを用いて市場反応分析を実践する(part1 相関分析)

```python
# 各種ライブラリ
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
```

### 売上データ csv を読み込む

```python
 df1= pd.read_csv('sales-price-promotion.csv')
 df1
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
      <th>sales</th>
      <th>price</th>
      <th>promo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>20820</td>
      <td>11700</td>
      <td>0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>21350</td>
      <td>11500</td>
      <td>1</td>
    </tr>
    <tr>
      <th>2</th>
      <td>24800</td>
      <td>11200</td>
      <td>0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>21610</td>
      <td>11100</td>
      <td>0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>28360</td>
      <td>9700</td>
      <td>1</td>
    </tr>
    <tr>
      <th>5</th>
      <td>25620</td>
      <td>10400</td>
      <td>0</td>
    </tr>
    <tr>
      <th>6</th>
      <td>36800</td>
      <td>6800</td>
      <td>1</td>
    </tr>
    <tr>
      <th>7</th>
      <td>29980</td>
      <td>8900</td>
      <td>1</td>
    </tr>
    <tr>
      <th>8</th>
      <td>26350</td>
      <td>11100</td>
      <td>0</td>
    </tr>
    <tr>
      <th>9</th>
      <td>26820</td>
      <td>9700</td>
      <td>0</td>
    </tr>
    <tr>
      <th>10</th>
      <td>30920</td>
      <td>9300</td>
      <td>1</td>
    </tr>
    <tr>
      <th>11</th>
      <td>32670</td>
      <td>8400</td>
      <td>0</td>
    </tr>
    <tr>
      <th>12</th>
      <td>28610</td>
      <td>8100</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
</div>

### 相関係数を求める

seaborn は相関分析に関するライブラリ

```python
df1_corr = df1_corr = df1.corr()
print(df1_corr)
```

              sales     price     promo
    sales  1.000000 -0.926171  0.422883
    price -0.926171  1.000000 -0.505485
    promo  0.422883 -0.505485  1.000000

```python
# 相関係数の視覚化
sns.heatmap(df1_corr, annot=True)
```

    <AxesSubplot:>

![png](/img/md/sale_anlysis/output_6_1.png)

### 散布図の作成

promo はダミーの値なので price と sales について作成する

```python
# x,yにそれぞれの値を配列で代入する
x = df1['price']
y = df1['sales']
```

```python
# 描画空間の作成
fig = plt.figure()

# 描画空間に割り振る
ax = fig.add_subplot(1, 1, 1)
ax.scatter(x, y, c='b')
ax.set_xlabel('price')  # x軸ラベル
ax.set_ylabel('sales')  # y軸ラベル
ax.set_title('sales-promo-correlation')  # グラフタイトル
```

    Text(0.5, 1.0, 'sales-promo-correlation')

![png](/img/md/sale_anlysis/output_9_1.png)

```python
print(df1_corr)
```

              sales     price     promo
    sales  1.000000 -0.926171  0.422883
    price -0.926171  1.000000 -0.505485
    promo  0.422883 -0.505485  1.000000

上記は母集団から抽出されたサンプルに基づいた相関係数で標本相関係数と呼ばれる  
母集団の相関を判断するには、母集団の相関係数が 0 ではない事を証明する(無相関の検定)

$$
t = \frac{|r|\sqrt{n-2}}{\sqrt{1-r^2}}
$$

上記の t = で表された式が自由度 n - 2 の t 分布に従うという帰無仮説を棄却することによって、標本相関係数が有意であることを証明する。

```python
from scipy.stats import pearsonr

x = df1['price'].values
y = df1['sales'].values
```

p 値を計算し、有意水準を 0.05 とします。すなわち、p 値が 0.05 以下の場合は帰無仮説を棄却し、p 値が 0.05 以上の場合は帰無仮説を棄却できないとする。

```python
result = pearsonr(x,y)
r_value = result[0]
p_value = result[1]
print('相関係数：', r_value)
print('p値：', p_value)
```

    相関係数： -0.9261708886842639
    p値： 5.5001264430936035-06

P 値 5.5…-6 より 有意水準 0.05 を下回る

1.標本から相関係数から求める  
2.相関が母集団にも当てはまるか無相関の検定を行う
