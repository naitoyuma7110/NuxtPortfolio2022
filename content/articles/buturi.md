---
title: ニュートンの運動方程式
description: この記事の説明がここに入ります
createdAt: 2020/11/18
tags: ['力学', '物理']
---

$$ m\vec{a}=\vec{F} $$

<p style="font-size:8px">※ベクトルは方向を伴う大きさの単位</p>

例として  
「動いている物体の力は質量と加速度に比例する」  
「物体の動き(加速度)は、力の大きさに比例し、質量に反比例する」など

## 等加速度直線運動

一定の加速度で運動する物体は以下を満たす

位置$x$  
速度$V$  
初速度$V_0$  
加速度$\alpha$  
時間$t$ とすると

1．$ V = V_0 + at $  
2．$ x = x_0 + V_0t + \frac{1}{2}at^2 $  
3．$V^2 - V_0^2 = 2a(x - x_0)$

<b>1. 初速に加速度と時間の積を加えると速度が求められる</b>

<b>2. 初期位置に初速度と時間の積(距離)を加えた位置から,さらに加速度分の距離を追加すると位置が求められる</b>  
<img src="/img/md/syahou/sokudo.png">

上記グラフの面積を求めると距離が求められる

積分を使った解法として  
速度を表す関数$v$を$t(時間)$で積分する  
$$x = \int vdt $$

$$ = V_0t + \frac{1}{2}at^2 + C_2 $$

時間が 0 の時の位置は初期位置$x_0$となるため  
$t = 0$の時$x = x_0$を上式に代入して$C_2 = x_0$が求められる

よって $$ x = x_0 + V_0t + \frac{1}{2}at^2 $$

<b>3. 1-2 の連立方程式で時間を消す</b>  
 <img src="/img/md/syahou/k_sci_phy_1_2_8_1_image01.png">

よって  
 $$V^2 - V_0^2 = 2a(x - x_0)$$

#### 基本問題

<img src="/img/md/syahou/mondai.png">

<b>問題に入る前に 2 次元の問題は 1 次元に分解して情報を整理する</b>

<b>1. 初速度$V_0$の分解</b>  
三角関数を使い$V_0$を x 成分、y 成分に分解する  
$ \sin\theta = V_0x$ より $ x = V_0\cos\theta$  
$ \cos\theta = V_0y$ より $ y = V_0\sin\theta$

<b>2. $\vec F$の分解</b>  
ボールにかかる力は重力$mg$(質量 m× 重力加速度 g)  
→Y 軸上のみ、ボール(m)に対して-g の加速度が生じる  
<span style="font-size:8px">重力加速度:g は通常$9.8m/s^2$</span>

X 軸上は力の作用はない

<b>3.運動方程式を立てる</b>  
$m\vec{a} = \vec{F}$より

$m\vec{a_x} = \vec{F_x} $  
$m\vec{a_y} = \vec{F_y} $

ベクトルが等しいという事大きさと方向が等しい  
方向が等しいため X,Y 成分に分解しても大きさは等しい

ボールに加わる力は y 成分に対する重力のみ  
$ma_x = 0$(X 軸)  
$ma_y = -mg$(Y 軸)  
$a_x = 0$ $a_y = -g$ となる  
加速度 a が 0 の場合、物体は等速直線運動を行う  
加速度 a が一定(定数)場合、物体は等加速度直線運動を行う

<b>よってボールは

> X 軸方向には初速度$V_0\cos\theta$の等速直線運動を行い、  
> Y 軸方向には初速度$V_0\sin\theta$の鉛直投げ上げ運動をする</b>

<b>これまでの内容から斜方投射の方程式が説明できる</b>

> [X 軸上]  
> ①$V_x = V_0\cos\theta$  
> ②$x = V_0\cos\theta t$（X 軸上は等速直線運動を行っているため)

> [Y 軸上]  
> ③$V_y = V_0\sin\theta-gt $(Y軸上は重力加速度によって初速から時間と共に減速する)  
>④$y = V_0\sin\theta t - \frac{1}{2}gt^2$($初期位置 y_0 ＝ 0 と加速度 α ＝-g$を代入)  
>⑤$V_y^2 - V_0^2\sin^2\theta = -2gy$($初速 V_0 と加速度 α と初期位置 y_0 を代入$)

<b>(1)最高点に到達するまでの時間はいくらか？</b>

<b>最高点では Y 軸方向の速度が 0 になる</b>  
よって速度$V_y = 0$

ボールにかかる力$ \alpha_y = -g $  
初速$ V_0y = V_0\sin\theta$

① より  
$V_y = V_0y - \alpha t$  
$0 = V_0\sin\theta -gt$

> 答え・・・最高到達点までの時間は$ \frac{V_0\sin\theta}{g} $

(2)最高点はいくらか？

位置を求める式 $$ y = y_0 + V_0t + \frac{1}{2}at^2 $$  
に(1)の解 t=...を代入してもいいが、計算が長くなる…

(1)と同じく Y 軸方向の速度$V_y = 0$の時  
⑤ より  
$-V_0^2\sin^2\theta = -2gy$(この時、位置$y$が最高値となる)

> 答え・・・最高到達点は$ \frac{V_0^2\sin^2\theta}{2g}$

<b>(3)OP(水平到達距離)はいくらか</b>

水平距離は X 軸上の話だが、投射から落下という現象は Y 軸上でしか表現できない

<b>ボールが初期位置 y=0 から頂点に達し、再び$y=0$となるまでの時間 t を求める</b>

④ より  
$ 0 = V_0\sin\theta t -\frac{1}{2}gt^2$

$ t^2 - \frac{2V_0\sin\theta t}{g} = 0$  
$t(t - \frac{2V_0\sin\theta}{g}) = 0$
<span style="font-size:8px">この形（$x(x-a) = 0$ で $x = 0,-a$と同じ形なので）</span>

$t=0 , \frac{2V_0\sin\theta}{g} $

<b>ボールの位置が Y 軸上で 0 となる時間は　 0,　$\frac{2V_0\sin\theta}{g}$となる</b>  
解が 2 つあるのは、最初の地点と落下地点の 2 点で$y = 0$を示すから…素晴らしい…

よって、X 軸上で$t=\frac{2V_0\sin\theta}{g}$の等速直線運動を行う場合の到達距離 X は ② より

$x = \frac{V_0\cos\theta × 2V_0\sin\theta}{g}$

$x = \frac{V_0^2}{g}2\sin\theta\cos\theta$

倍角の公式より($\sin 2\theta = 2\sin\theta \cos\theta$)

$ x = \frac{V_0^2}{g}\sin2\theta$

> 答え・・・OP(水平到達距離)は$ \frac{V_0^2}{g}\sin2\theta$

<b>ちなみに最も水平到達距離が大きくなる時の角度$\theta$は…</b>

$V_0$と$g$は定数と考えると$\sin2\theta$が最大を示す角度となる

```python
import matplotlib.pyplot as plt
import numpy as np
import sympy as sym
from sympy.plotting import plot
sym.init_printing(use_unicode=True)
%matplotlib inline
a, b, c, x, y = sym.symbols("a b c x y")
plt.rcParams['font.family'] = 'Noto Sans JP'

x = np.linspace(0, 2*np.pi, 500)

plt.plot(x,np.sin(x))
plt.grid(True)
plt.show()
```

![png](/img/md/buturi_files/buturi_14_0.png)

$\sin$の最大値は 1 のため  
$\sin2\theta = 1$の時 $2\theta = 90°$  
よって
$\theta =45° $

> <b>ボール投げで水平到達距離が最も大きくなる投射角度は 45°</b>  
> <span style="font-size:8px">実際は空気抵抗があるので、39° ～ 40° くらいが最適らしい</span>

<b>(4)軌道の方程式$f(x)$を求めよ</b>

x と y の関係 $y=f(x)$ の形にする

② より  
$x = V_0\cos\theta t$  
$t = \frac{x}{V_0\cos\theta}$  
④ に代入  
$y = V_0\sin\theta \frac{x}{V_0\cos\theta} - \frac{1}{2}g (\frac{x}{V_0\cos\theta})^2$  
$y = \sin\theta \frac{x}{\cos\theta} - \frac{1}{2}g \frac{x^2}{V_0^2\cos^2\theta}$  
$y = \frac{\sin\theta}{\cos\theta}x -  \frac{g}{2V_0^2\cos^2\theta}x^2$

(三角関数より$\frac{\sin\theta}{\cos\theta} = \tan\theta$)

$y =  -\frac{g}{2V_0^2\cos^2\theta}x^2 + \tan\theta x$ ($y=ax^2+bx+c$の形)

> 答え・・・$f(x) = y =  -\frac{g}{2V_0^2\cos^2\theta}x^2 + \tan\theta x$

$a < 0 $より
<b>$f(x)$は上に凸な放物線を描く二次関数である</b>

そのため頂点の y 座標は$f(x)$の平方完成で求められ、その解は(2)の解$ \frac{V_0^2\sin^2\theta}{2g}$と一致するはず…

つまり$f(x)$を平方完成すると
$$ y = -\frac{g}{2V_0^2\cos^2\theta}(x - \frac{V_0^2\sin^2\theta}{2g})^2 + q $$  
の形になる

見た感じ正しそうだが、長くなりそうなので計算はしない

#### 応用問題：モンキーハント

<img src="/img/md/syahou/saru.png" width=400px>

<b><情報の整理></b>

図では(a,b)の表記だが、α と被るので(L,H)とする

<b>初速度$V_0$の分解</b>  
$ V_x = V_0\cos\theta$  
$V_y = V_0\sin\theta$

<b>小球 P にかかる力</b>  
Y 成分：$\vec{F} = -mg$  
X 成分：$\vec{F} = 0$

<b>運動方程式</b>  
$m\vec{a} = \vec{F}$ より

$m\vec{a_y} = -mg$  
$ a_y = -g$

$m\vec{a_x} = 0$  
$ a_x = 0$

<b>よって小球 P は

> X 軸方向には初速度$V_0\cos\theta$の等速直線運動を行い、  
> Y 軸方向には初速度$V_0\sin\theta$の鉛直投げ上げ運動をする</b>

> [X 軸上]  
> ①$V_x = V_0\cos\theta$  
> ②$x = V_0\cos\theta t$

> [Y 軸上]  
> ③$V_y = V_0\sin\theta-gt $  
>④$y = V_0\sin\theta t - \frac{1}{2}gt^2$  
> ⑤$V_y^2 - V_0^2\sin^2\theta = -2gy$

また自由落下する小球 Q において

初速$V_0q = 0$

<b>小球 Q にかかる力</b>  
Y 成分：-mg(重力)  
$m\vec{a} = \vec{F}$より  
$ma = -mg$  
$a = -g$

<b>よって小球 Q は</b>

> 初期位置(L,H)から Y 軸方向に初速$V_0=0$、加速度$a=-g$の自由落下運動を行う  
> ⑥$V_y = -mt$  
> ⑦$y = H  - \frac{1}{2}gt^2$  
> ⑧$V_y^2 = -2gy$

<b>(1)P が$x=L$を通る時刻 t を求めよ</b>  
① より  
$L = V_0\cos\theta t$  
$t = \frac{L}{V_0\cos\theta} $

> 答え・・・$t = \frac{L}{V_0\cos\theta} $

<b>(2)この時刻 t の時の、小球 P,Q の y 座標$(y_p,y_q)$を求めよ</b>

$y_p$について  
小球 P に生じる Y 軸上の加速度は-g  
また ④ より

> 答え 1・・・$y_p = V_0\sin\theta t - \frac{1}{2}gt^2$

また$y_q$について ⑦ より

> 答え 2・・・$y_q = H - \frac{1}{2}gt^2$

<b>(3)$V_0$に関わらず、P,Q が衝突する角度$\theta$の値について、$\tan\theta$を求める</b>

<b>P($x_p,y_p$)と Q($a,y_q$)が一致すれば衝突する</b>

小球 P において  
(1)の解と ② より、P が$x=L$を通る時刻 t の x 座標($x_p$)は  
$x_p = L$

この時（2）の解より  
$y_p = V_0\sin\theta t - \frac{1}{2}gt^2$

よって P が$x = L$上を通る際の座標($x_p,y_p$)は

> $(L,V_0\sin\theta t - \frac{1}{2}gt^2)$

また(2)の解より、この時小球 Q の y 座標は  
$(L, H - \frac{1}{2}gt^2)$

$y_p = y_q$となる$\theta$を求める

$V_0\sin\theta t - \frac{1}{2}gt^2 = H - \frac{1}{2}gt^2$

この時(1)より$ t = \frac{L}{V_0\cos\theta}$

$V_0\sin\theta \frac{L}{V_0\cos\theta} - \frac{1}{2}g(\frac{L}{V_0\cos\theta})^2 = H - \frac{1}{2}g(\frac{L}{V_0\cos\theta})^2$

$ \frac{V_0\sin\theta}{V_0\cos\theta}L - \frac{L^2}{2V_0^2\cos^2\theta}g = H - \frac{L^2}{2aV_0^2\cos^2\theta}g$

$\tan\theta L = H$

> 答え・・・$\tan\theta = \frac{H}{L}$

<b>$\tan\theta=\frac{H}{L}$となる角度$\theta$とは、小球 Q が自由落下を開始する地点と X 軸との成す角となる</b>

<b>マジで信じられないが、どんな初速度で小球 P を発射しようとも、小球 Q の最初の地点を目標に向けて発射すれば、命中する。マジで信じられん</b>

### 参考サイト

- [家庭教師のトライ 斜方投射の立式に関する問題](https://www.try-it.jp/chapters-8001/sections-8036/lessons-8062/practice-3/)
- [高校の力学を全部解説する授業(前編)【物理】](https://www.youtube.com/watch?v=9XEX4mZFOhA)
