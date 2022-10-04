---
title: 積分
description:
tags: ['数学', '積分']
---

## 「傾き」を求める微分

#### <b>1 次関数の傾き</b>

> 例えば、秒速 5.0㎝ で落下する桜の花びらの X 秒後の移動距離 Y について
>
> <div style="text-align:center;"><b>

    「傾き」= 単位時間あたりの変化量 = 速度 と言える

</b></div>

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
plt.rcParams['font.family'] = 'Noto Sans JP'

N = 1000
xmin = 0
xmax = 100
def f(x):
    return 5 * x

# 指定範囲間のN(60)個の数値を配列に入れる
p = np.linspace( xmin, xmax, N)

fig, ax = plt.subplots()

# その配列を回してp配列の各数値をf(x)に代入して得た値をプロット
ax.plot( p, [f(p[k]) for k in range(N)] )

ax.set_xlim(0, 100)
ax.set_ylim(0, 500)
ax.grid(True)

plt.title("f(x) = 5x")
plt.xlabel("( sec )")
plt.ylabel("( cm )")
plt.show()
```

![png](Calculus_files/Calculus_2_0.png)

```python
def katamuki(x1,x2,y1,y2): # 2点の座標(x,y)を引数に傾きを求める式を作成
    print("傾き：" + str(round((y1 - y2)/(x1 - x2),2)))
    return round((y1 - y2)/(x1 - x2),2)

# p配列に入力された値を適当に取り出して関数に入れる(x=15とx=20)
katamuki(p[15],p[20],f(p[15]),f(p[20]));
```

    傾き：5.0

<b>1 次関数であれば傾きは一定となり微分は必要ない</b>

### <strong>多次元関数や指数関数の傾き</strong>

> 例えば、刻一刻と落下速度を変化させる桜の花びらの X 秒時点の移動距離 Y について  
> <b>X と Y の関係性が関数で表せるのなら(y = f(x))、微分によって傾きも関数で表せる</b>

```python
N = 1000
xmin = 0
xmax = 100
def f(x):
    if x < 0:
        return 0
    else:
        return x**2 + 4 * x + 4

p = np.linspace( xmin, xmax, N)

fig, ax = plt.subplots()
ax.plot( p, [f(p[k]) for k in range(N)] )

ax.set_xlim(0, 10)
ax.set_ylim(0, 100)
ax.grid(True)

plt.title("f(x) = x^2")
plt.xlabel(" ( t )")
plt.ylabel("( f(x) )")
plt.show()
```

![png](Calculus_files/Calculus_6_0.png)

例えば上記のグラフ
$$ y = x^2 + 4x + 4\\ $$
を微分し、傾きを導く関数を求める

```python
import sympy as sym
from sympy.plotting import plot
sym.init_printing(use_unicode=True)
%matplotlib inline
# シンボルを登録
a, b, c, x, y = sym.symbols("a b c x y")

expr = x ** 2 + 4 * x - 4
# 微分
sym.Derivative(expr)
```

$\displaystyle \frac{d}{d x} \left(x^{2} + 4 x - 4\right)$

```python
# 微分を計算する
expr2 = sym.Derivative(expr).doit()
expr2
```

$\displaystyle 2 x + 4$

```python
# グラフ
plot(expr2,(x, -20 , 20))
```

![png](Calculus_files/Calculus_10_0.png)

    <sympy.plotting.plot.Plot at 0x7ff729872f20>

<b>微分の結果</b>  
$$ y = x^2 + 4x + 4 \\ $$
で表せる桜の落下距離 Y と時間 X について t 秒時点の桜の落下速度は

$$ \\ f(t) = 2t + 4 \\ $$
となる。例えば４秒時点なら秒速 8㎝

### <b>この微分計算のポイント</b>

#### <b>この例でいうと傾きは時間あたりの変化量（変化の割合）であるが、X の特定の範囲の傾きを求めるのではなく、特定の時点の傾きを求めている</b>

<img src="/img/md/biseki/katamuki.png">  
例えば上記グラフでは  
$$a = \frac{f(x_2)-f(x_1)}{x_2-x_1}\\ $$
のように、傾きを導く関数を表せるがこれでは特定の2点間(範囲)の傾きしか求める事ができない  
そのため、X1とX2の距離を限りなく近づける。ただし完全に重なるとx,yの増加量がどちらも0となり傾きは 0/0 となってしまう  
そこで<b>極点</b>の考えが必要となる

関数 f に対し、変数 h を a に近づけていった際、f(h)が近づく値を lim と表す

$$ \lim\_{\substack{h \to a}} f(h) \\ $$

例えば、h を限りなく 0 に近づけた時に 3h が限り近づく値は 0 である  
<b>ややこしいのは、限りなく近づけるだけであって、h=0 になってはいけないという点</b>

$$ \lim\_{\substack{h \to 0}} 3h = 0 \\ $$

この極点の考え方を先ほどのグラフの傾きに当てはめる　
<img src="/img/md/biseki/katamuki2.png">

$$
a = \lim_{\substack{h \to 0}}  \frac{f(x+h)-f(x)}{(x+h)-x}　\\
     = \lim_{\substack{h \to 0}}  \frac{f(x+h)-f(x)}{h}
$$

Ｘの値によって 1 つの値(傾き)を求める事ができる  
この式を<b>導関数:f(x)</b>と呼び、<b>微分とはこの導関数を求める計算の事</b>  
<b>極点はグラフの接点となり、ある接点におけるグラフの傾きは接線の傾きと一致する</b>  
あってます？

導関数を表す場合 f(x)を

$$ \frac{d}{dx}f(x) $$ または　$$ \frac{df}{dx}(x) $$ と表すこともできる

### 結論:微分で傾きを導くための関数がわかる

## これができて何が嬉しいのか

ここに書いてありした
[結城浩 on Twitter: "質問（微分の何が嬉しいか）](https://twitter.com/hyuki/status/1206882565228875776)

参考サイト  
[中学数学からはじめる微分積分](https://www.youtube.com/watch?v=4p1rwfXbCoY)  
[微分とは何か？ ](https://sci-pursuit.com/math/differential-1.html)
