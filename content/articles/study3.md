---
title: 統計4
description:
tags: ['力学', '物理']
---

# 統計学の体系

### 目的と考え方の分類

- 記述統計  
  収集したデータの平均や分散、標準偏差などを計算して分布を明らかし、データの示す傾向や性質を把握する

- 推計統計学  
  母集団から抽出した特定の標本(サンプル)を使い、母集団の性質を推論する

![image](./study3_files/tech_data1.jpg)

### 「ビッグデータ」

IoT 化が進み個々人の膨大なサンプルを集積できるようになった。  
標本が母集団により近づくについれ正確な推論が可能となっている。

例えば楽天サービスを利用すると、住所、年齢、性別、家族、職業、月収、貯金残高、お金の使い方など様々な情報を収集される

昨今では、こういった膨大な情報を解析できるようになった。

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import sympy as sym
from fractions import Fraction
from sympy.plotting import plot
sym.init_printing(use_unicode=True)
%matplotlib inline
# シンボルを登録
a, b, c, x, y = sym.symbols("a b c x y")
plt.rcParams['font.family'] = 'Noto Sans JP'
```

## データのばらつきに関する統計量

> 平均値や中央値など中心が同じでもばらつきが異なる 2 つのデータ

![img](test_files/test_30.png)

## 分散

各データの値が平均値からどのくらい離れているか、各データ値の平均との差を求めて 2 乗した後、更にその合計の平均値を出したもの  
平均との差は正負が入り混じっているため、2 乗して正に数に統一する  
分散$α^2$  
平均値$x^-$

$$ α^2 = \frac{1}{n}\sum\_{i=1}^{n}(x_i-x^{-})2 $$

サンプルデータ：ある男子中学校の体型データ(ネットで拾った)

- height:身長
- weight:体重
- hand_length:手掌の長さ

```python
df = pd.read_csv('excel_data01mod.csv')
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
      <th>height</th>
      <th>weight</th>
      <th>hand_length</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>170.9</td>
      <td>66.1</td>
      <td>74.1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>175.1</td>
      <td>60.9</td>
      <td>73.6</td>
    </tr>
    <tr>
      <th>2</th>
      <td>170.7</td>
      <td>71.5</td>
      <td>77.7</td>
    </tr>
    <tr>
      <th>3</th>
      <td>171.7</td>
      <td>51.8</td>
      <td>75.6</td>
    </tr>
    <tr>
      <th>4</th>
      <td>170.8</td>
      <td>58.2</td>
      <td>73.3</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>95</th>
      <td>169.8</td>
      <td>63.2</td>
      <td>73.8</td>
    </tr>
    <tr>
      <th>96</th>
      <td>165.8</td>
      <td>55.0</td>
      <td>69.3</td>
    </tr>
    <tr>
      <th>97</th>
      <td>166.8</td>
      <td>58.8</td>
      <td>70.4</td>
    </tr>
    <tr>
      <th>98</th>
      <td>178.8</td>
      <td>69.0</td>
      <td>74.9</td>
    </tr>
    <tr>
      <th>99</th>
      <td>167.5</td>
      <td>58.7</td>
      <td>73.0</td>
    </tr>
  </tbody>
</table>
<p>100 rows × 3 columns</p>
</div>

> ヒストグラム作成

```python
height = np.array(df["height"])
weight = np.array(df["weight"])
hand_length = np.array(df["hand_length"])

fig1 = plt.figure()
fig2 = plt.figure()
fig3 = plt.figure()

# 描画領域の設定
ax1 = fig1.add_subplot(1, 1, 1)
ax2 = fig2.add_subplot(1, 1, 1)
ax3 = fig3.add_subplot(1, 1, 1)

# グラフタイトル
ax1.set_title('height')
ax2.set_title('weight')
ax3.set_title('hand')

ax1.hist(height, bins="auto",  histtype='step')
ax2.hist(weight, bins="auto",  histtype='step')
ax3.hist(hand_length, bins="auto",  histtype='step')
# グラフ描写
plt.show()

# 分散を算出
print("身長の分散:" + str(round(np.var(height),2)) + "cm^2")
print("体重の分散:" + str(round(np.var(weight),2))+ "cm^2")
print("手掌の長さの分散:" + str(round(np.var(hand_length),2)) + "cm^2")
```

![png](study3_files/study3_8_0.png)

![png](study3_files/study3_8_1.png)

![png](study3_files/study3_8_2.png)

    身長の分散:20.46cm^2
    体重の分散:41.89cm^2
    手掌の長さの分散:7.56cm^2

#### 分散だと差が 2 乗されててイメージしにくい...

## 標準偏差

標準偏差$α$  
$$ α = \sqrt{\frac{1}{n}\sum\_{i=1}^{n}(x_i - x^-)^2} $$
分散の平方を求めた値

```python
print("身長の標準偏差:±" + str(round(np.std(height),2)) + "cm")
print("体重の分標準偏差:±" + str(round(np.std(weight),2))+ "cm")
print("手掌の長さの標準偏差:±" + str(round(np.std(hand_length),2)) + "cm")
```

    身長の標準偏差:±4.52cm
    体重の分標準偏差:±6.47cm
    手掌の長さの標準偏差:±2.75cm

<b>標準偏差が一番小さいから手掌の長さが一番ばらつきが少ない？</b>

> 分散や標準偏差はデータの大きさに依存するためこの結論は不適切
> 異なるデータに対しては単純に標準偏差でばらつきを評価することが適切でない

## 変動係数

平均$x^-$  
標準編差$α$

$$ CV = \frac{α}{x^-} $$

標準偏差を平均値で除する  
<b>平均値に対する相対的な値となるので、データが異なっても比較可能</b>

```python
# 変動係数はnumpyではなくscipyを使用する
from scipy.stats import variation
print("身長の変動係数:" + str(round(variation(height),2)))
print("体重の変動係数:" + str(round(variation(weight),2)))
print("手掌の長さの変動係数:" + str(round(variation(hand_length),2)))
```

    身長の変動係数:0.03
    体重の変動係数:0.11
    手掌の長さの変動係数:0.04

> <b>変動係数で各データを比較すると、身長のばらつきが最も小さい事がわかる</b>

# 確率変数と分布

推論には確率を使う。

- 確率変数：サイコロでいうと目の値
- 確率：サイコロでいうと特定の目がでる確率

| 確率変数 |  1  |  2  |  3  |  4  |  5  |  6  |
| :------: | :-: | :-: | :-: | :-: | :-: | :-: |
|   確率   | 1/6 | 1/6 | 1/6 | 1/6 | 1/6 | 1/6 |

## 性質の異なる確率変数

- <b>離散型確率変数</b>  
  変数の数値に連続性がない場合  
  (サイコロの目、コインの裏表)
- <b>連続型確率変数</b>  
  変数の数値に連続性がある場合  
  (温度、長さ、角度、重さ)  
  こちらはイメージしにくい.確率変数を点として捉えられない

例えば以下のダーツが

- 0 ～ 90deg の範囲に命中する確率は算出可能(25%)
- 90deg の点に命中する確率は算出不可(<strong>1/360 ではない</strong>)

<img src="./study3_files/fukiya.png" width=400px>  
  
  
なぜなら、指定した90degの角度とは90.0000...であり、90.00001でもなければ89.9999でもない。  
つまり角度(分母)を無限に分割できて、かつ指定した角度(分子)が特定の値を取るため、限りなく0に近い値 = 0となる

```python
saikoro = [1,2,3,4,5,6]
kakuritu = 1/len(saikoro)

data = np.array(saikoro)
fig = plt.figure()
ax = fig.add_subplot(1, 1, 1)
ax.bar(saikoro,kakuritu)
ax.set_ylim([0,0.3])
ax.set_xlim([0,7])
plt.title("離散型確率分布(サイコロの目)")
plt.xlabel("確率変数(出目)")
plt.ylabel("確率")
plt.show()
```

![png](study3_files/study3_18_0.png)

離散型確率分布：X 軸に離散確率変数,Y 軸に確率を取るグラフ

各確率変数 × 確率の総和が 1 になる特徴がある
<img src="./study3_files/sikorokakuritu.png">

## 連続型確率分布はどう表現するか

上述の通り、連続型確率変数の場合は確率変数がある一点の値をとる確率は限りなく 0 になるため、縦軸は確率ではなく「確率密度」を使用する。

確率密度は定義域内における確率変数値の「相対的な出やすさ」を表し、関数で表される。

> 例) 確率変数 <b>X</b>が 0 から 3 までの実数を取る場合、次のような確率密度関数を定義する

$$ f(x) = \Biggl\{ \begin{matrix} \frac{2}{9}x (0<=x<=3) \\ 0 (x<0, 3< x) \end{matrix} $$

```python
N = 1000
xmin = -2
xmax = 5
def f(x):
   if x < 0 or 3 < x: return 0
   else: return 2/9 * x

p = np.linspace( xmin, xmax, N)
fig, ax = plt.subplots()
ax.plot( p, [f(p[k]) for k in range(N)] )

ax.set_xlim(-2, 5)
ax.set_ylim(-0, 1)
ax.grid(True)
plt.title("連続型確率分布(例)")
plt.xlabel("確率変数")
plt.ylabel("確率密度")
plt.show()
```

![png](study3_files/study3_21_0.png)

$ f(1) = \frac{2}{9} , f(3) = \frac{2}{3} $であることから確率変数は P(1)よりも P(3)が「相対的に出やすい」といえる

<b>連続型確率変数では確率密度は実数だが、特定の値を取る確率は限りなく 0 なので注意</b>

## 連続型確率分布における「確率」

<img src="./study3_files/renzokubun.png">  
積分で求められる

$$ P( y \leqq x \leqq b) = \int\_{a}^{b}f(x)dx $$

また確率のルールでは「全事象が起こる確率は 1 である」

$$ \int\_{-\infty}^{\infty}f(x)dx = 1 $$

## 累積分布関数

確率変数$X$がある値$x$以下($X \leqq x$)となる確率を導く関数

$$F(x) = P(X \leqq x)$$

- <b>離散型確率変数の場合</b>

$$F(x) = P(X \leqq x) = \sum_{X\leqq x}{P(X)}　$$

> 例)サイコロの目が 4 以下の累積確率分布は

$$
\begin{align}　P(X \leqq 4) &= \sum_{X\leqq 4}{P(X)}  \\
&= P(1) + P(2) + P(3) + P(4) \\
&= \frac{1}{6} + \frac{1}{6} + \frac{1}{6} + \frac{1}{6}　\\
&= \frac{4}{6}
\end{align}
$$

- <b>連続型確率変数の場合</b>

$$ 　 F(x) = P(X \leqq x) = \int\_{-\infty}^{x}f(t)dt $$

> 青いグラフのような確率密度関数：$f(x)$の積分$F(x)$となる

<img src="./study3_files/renzoku.png">

> この時 $(b<X)$ では $F(X) = 1$となる  
> また $(a<X)$ では $F(X) = 0$ となる
> (全ての事象の確率は 1 だがら)

## 期待値

<b>期待値のイメージは確率を加味した時の変数の平均値</b>  
<b>通常のデータサンプルと違い、各変数に確率で重み付けをする</b>

- <b>離散型確率変数の期待値</b>

確率変数 X の期待値は $E(X)$と表す  
X が取りうる値を 1 から n とすると、$x_i$は確率変数、$p_i$は確率を表す

$$ E(X) = \sum\_{X = 1}^{n} x_i \times p_i $$

- <b>連続型確率変数の期待値</b>

$$ E(X) = \int\_{-\infty}^{\infty}xf(x)dx $$

確率変数の取りうる全範囲における f(X)の積分と変数 x の積

例)確率密度関数$f(x)=\frac{1}{6}$において$(0 \leqq X \leqq 6)$の時

$$
\begin{align} E(X) &= \int_{0}^{6}xf(x)dx \\
&= \int_{0}^{6}x\frac{1}{6}dx \end{align}
$$

```python
# 積分計算
sym.integrate(1/6 * x)
```

$\displaystyle 0.0833333333333333 x^{2}$

```python
# $x^2のx(0,6)の積分は21
sym.integrate(1/6 * x,(x,0,6))
```

$\displaystyle 3.0$

```python
N = 100
xmin = 0
xmax = 10
def f(x):
   return 1/6 * x

p = np.linspace( xmin, xmax, N)
fig, ax = plt.subplots()
ax.plot( p, [f(p[k]) for k in range(N)] )

ax.set_xlim(0, 10)
ax.set_ylim(0, 2)
ax.grid(True)
plt.title("確率密度関数 $ f(x) = 1/6x $")
plt.xlabel("確率変数")
plt.ylabel("確率密度")
plt.show()
```

![png](study3_files/study3_28_0.png)

上記グラフ$(0 \leqq X \leqq 6)$の面積：期待値 = $ 3 $

## 確率変数の分散

<b>通常のデータサンプルでは、分散は各データと平均との差の 2 乗の総和</b>  
<b>確率においては、各変数と期待値の差に対し、確率で重み付けをしてから総和をとる</b>

- <b>離散型確率変数の場合</b>

X の期待値を$E(X)=μ$
$$ V(X) = \sum\_{i=1}^{n}(x_i - μ)^2p_i $$

例）サイコロの期待値 E(X)と分散 V(X)

$$ E(X) = \sum\_{i=1}^{6}\frac{1}{6}i $$

```python
# シグマの解の公式を知らないのでプログラムで解く
result = 0
for i in range(1, 7):
    result += 1/6 * i
print("E(x) =" + str(result))
```

    E(x) =3.5

分散 V(X)とする  
$E(X) = 3.5$  
サイコロの各変数（出目）の確率は全て 1/6 なので $p_i = 1/6$
$$ V(X) = \sum*{i=1}^{6}((i - E(x))^2p_i $$
$$ V(X) = \sum*{i=1}^{6}(i - 3.5)^2 × 1/6 $$

```python
# 同じくプログラムで解く
result = 0
for i in range(1, 7):
    result += (i - 3.5)**2
result
```

$\displaystyle 17.5$

```python
Fraction(175,60)
```

    Fraction(35, 12)

= 12/35

- <b>連続型確率変数の場合</b>

X の期待値を$E(X)=μ$

$$ V(X) = \int\_{-\infty}^{\infty}(x - μ)^2f(x)dx $$

難しい…説明不可

### 参考サイト

- Pythonn による統計処理  
  [Python エンジニアによる Python3 学習サイト](https://www.python.ambitious-engineer.com/archives/category/application/data_analysis)  

- 統計学  
  [統計 WEB](https://bellcurve.jp/statistics/)

```python

```
