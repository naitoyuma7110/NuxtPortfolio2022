---
title: 仕事とエネルギー
description: どれだけの力の大きさでどれだけ物体を移動させたか、力の方向と移動方向を一致させて積を取る$$ W = Fl\cos\theta [J] $$
tags: ['力学', '物理', 'エネルギー', '仕事', 'ベクトル内積']
createdAt: 2022/9/20
---

## エネルギー

「仕事」をする能力

### 仕事(：W)【J】

どれだけの力の大きさでどれだけ物体を移動させたか、力の方向と移動方向を一致させて積を取る

$$ W = Fl\cos\theta [J] $$

<p style="text-align:center">$\theta$は移動方向と力の方向のなす角</p>

### 仕事とベクトル内積

ベクトルの内積は物理では仕事を導く公式と同じ  
方向の異なる２要素から同一方向の成分を抽出して積を取るという考え方で使われる

<img src="/img/md/vec/naiseki.png">
上の図で
$$ 働いた力：F_b = \vec{b}$$   
$$移動距離,方向を L = \vec{a} $$
とすると

$$ W = F\cos\theta L = F・L $$

この$W =  F\cos\theta L$で求める仕事はベクトル内積と同じ考え方をする

### 仕事率(:P)【W】

t 秒間に W【J】の仕事をするとき

$$ P = \frac{W}{t}【W】 $$
仕事の W(Work)とごっちゃにしない

### <b>運動エネルギー</b>

<b>これからすることができる仕事の量</b>

<img src="/img/md/buturi5/undoE.png">

速度 v、質量ｍのボールをキャッチしたらグローブが距離Ｌ移動した  
この場面でボールがすることができる仕事の量について考える

ボールがグローブに到達し一定の力 F でグローブを押し減速、そして静止した時について  
この時、ボールの力：F はグローブを+方向へ L だけ移動させた

- <b>ボールの運動方程式</b>

ボールはグローブから－方向の力を受ける(減速)
$$ ma = -F $$
$$ F = -ma $$

また F は一定のため、加速度$a$も一定、ボールは等加速運動(負：減速)を行う

$$ a = -\frac{F}{m}$$

- <b>ボールのした仕事</b>  
  ボールはグローブにより－方向の力を受け、反作用によりグローブを＋方向へ押す

$$ W = FL $$

ボールの運動方程式$ F = -ma $より

$$ W = -maL $$

等加速運動の移動距離を使用した方程式$ V^2 - V_0^2 = 2a(x-x_0)$より

$$ V^2 - V_0^2 = 2aL $$

ボールの初速$V_0 = V$、静止時の速度$V = 0$を代入

$$ 0^2 - V_0^2 = 2aL $$

$$L = -\frac{V_0^2}{2a} $$

これをボールのした仕事を求める式に代入

$$ W = (-ma)(-\frac{V_0^2}{2a}) $$

$$ W = \frac{1}{2}mV^2$$

<b>速度 V、質量 m の物体がこれからする仕事は</b>

$$ W = \frac{1}{2}mV^2【J】$$

<b>よってこの物体の運動エネルギー k(Kinetic energy)は</b>

$$ k = \frac{1}{2}mV^2【J】 $$

仕事【J】は力【N】× 距離【m】と定義されているが,$\frac{1}{2}mV^2$の単位はどうか？

$$ kg × m^2/s^2 $$

m を 1 つずらす

$$ kg×m/s^2×m $$

$ kg×m/s^2$は力を表すため$(ma=F)$

$$ N × m $$

となり仕事の定義と単位が一致する

<b>仕事は力と距離の積であるが…  
物体がこれからする事のできる仕事はその物体の速度と質量によってすでに決まっている</b>

### <b>変化する速度と運動エネルギー</b>

<img src="/img/md/buturi5/undoE.png">

初速$V_1$で移動する質量 m の物体に F(一定)の力を加え距離 L 移動させた。  
またこの時、物体は速度$V_2$となった。

運動方程式より
$$ ma = F $$

$$ a = \frac{F}{m} $$

この時、Ｆは一定であるため、加速度 a も一定

- <b>F がした仕事</b>

$$ W=FL $$

この物体は等加速度直線運動を行うため

$$ V^2 - V_0^2 = 2a(x - x_0) $$

初速$V_0 = V_1$、速度$V = V_2$、移動距離$x-x_0 = L$を代入

$$V_2^2 - V_1^2 = 2aL$$

$$L=\frac{V_2^2 - V_1^2}{2a}$$

また$ F = ma $より

$$ W=ma(\frac{V_2^2 - V_1^2}{2a}) $$

$$ W = \frac{1}{2}mV_2^2 - \frac{1}{2}mV_1^2 $$

<b>運動 E の変化となる</b>

よって

$$ W = k - k_0 $$

<p style="text-align:center">仕事は運動エネルギーの変化で表せる</p>

### <b>(重力による)位置エネルギー</b>

<img src="/img/md/buturi5/iti.png">

高さ h から落下する質量 m の物体について

- 重力のした仕事は

$$ W = FL $$

$F = mg$,$ L = h $より

$$W = mgh $$

- この物体のもつ運動エネルギーは

$$ W = k - k_0 $$

最初の地点の運動エネルギーは

$$ k_0 = mgh = 0 $$
$$ (h=0) $$

地面落下時の運動エネルギーは
$$ k_0 = mgh $$

最初の運動エネルギー$k_0 = 0$、地面到達時の運動エネルギー$k = mgh$より

$$ k = mgh $$

- 別の解法

この物体の運動エネルギーは

$$ k = \frac{1}{2}mV^2 $$

この物体に働く力は

$$ ma = F $$

重力加速度$a = g$より

$$ mg = F $$

重力加速度は一定であるため、この物質は等加速度直線運動を行う

よって

$$ V^2 - V_0^2 = 2a(x - x_0) $$

初速$V_0 = 0$,加速度$a = g$,移動距離$x-x_0 = h$より

$$ V^2 = 2gh $$

$ k = \frac{1}{2}mV^2 $より

$$ k = \frac{1}{2}m(2gh) $$

$$ k = mgh $$

<b>重力環境下において、ある高さにある物体は静止していても、運動エネルギーを有する  
これを位置エネルギーという</b>

(重力による)位置エネルギー$U$

$$ U= mgh 【J】$$

※基準面から h だけ下にあれば$U = mg(-h)$と考える

### <b>弾性エネルギー</b>

弾性力による位置エネルギー

<b>重力による位置エネルギーとの違いは、位置によって物体に働く力が変わること</b>  
よって等加速度直線運動でもない

物体に働く力(F)と位置(x)のグラフ

<img src="/img/md/buturi5/danse.png">

※比較に意味で… もし重力による力であれば、x に関わらず、kx は一定(mg)

フックの法則

$$ F = kx $$

<b>弾性力による位置エネルギー U</b>
$$ U = \frac{1}{2}kx^2【J】 $$

### <b>保存力</b>

<b>仕事が経路に依存していない力</b>

- 保存力:重力、弾性力、クーロン力
- 非保存力：摩擦力、空気抵抗など

経路に依存しないとは…  
<img src="/img/md/buturi5/hozon.png">

例えば

- 上記のいずれも重力のした仕事は等しい
- 到達点が等しければ経路に関わらず仕事は等しい

<p style="text-align:center"> 保存力のした仕事 = - (位置エネルギーの変化) <p>
    
- 保存力が仕事をすればするほど、位置エネルギーは小さくなる

## 力学的エネルギー保存則

仕事は保存力のした仕事と非保存力のした仕事の和であるため

<p style="text-align:center"> 運動エネルギーの変化 = 仕事（保存力のした仕事 + 非保存力のした仕事）</p>

また保存力のした仕事は-（位置エネルギーの変化）となるため

<p style="text-align:center"> 運動エネルギーの変化 + 位置エネルギーの変化 = 非保存力のした仕事</p>

よって

<p style="text-align:center"> 力学的エネルギーの変化　= 非保存力のした仕事</p>

非保存力の仕事が 0 のとき力学的エネルギーの変化が 0 となる

つまり

<p style="text-align:center"> 力学的エネルギー(変化前)=力学的E(変化後)</p>

これを<b>力学的エネルギー保存則</b>と呼ぶ

### <b>センター試験物理 Ⅰ 典型問題</b>

<img src="/img/md/buturi5/kako.png">

質量 m の物体が、ばねの自然長から d の位置にある。  
ここから物体をばねの力によって発射し、なめらかな斜面を滑り最大の高さ h に達した。

- (1)速さ V
- (2)高さ h

を求めよ

最初の地点で物体がもつエネルギーは、ばねの弾性力による位置エネルギー U

$$ U = \frac{1}{2}kd^2 $$

ばねの力により平面を移動する地点で物体がもつエネルギーは、運動エネルギー k

$$ k = \frac{1}{2}mV^2$$

斜面を登り、高さ h に達した際の物体のもつエネルギーは、重力による位置エネルギー U

$$ U = mgh $$

力学的エネルギー保存則により(1)速さ V は

$$\frac{1}{2}kd^2 = \frac{1}{2}mV^2$$

$$ V^2 = \frac{k}{m}d^2 $$

$$ V = \sqrt{\frac{k}{m}}d$$

力学的エネルギー保存則により(2)高さ h は

$$ mgh = \frac{1}{2}mV^2 $$

$$ V^2 = 2gh $$

$$ h = \frac{V^2}{2g}$$

$ V^2 = \frac{k}{m}d^2 $より

$$ h = \frac{k}{m}d^2 \frac{1}{2g} $$

$$ h = \frac{kd^2}{2mg} $$

### <b>センター試験物理 Ⅰ 典型問題 2</b>

<img src="/img/md/buturi5/hozon2.png">

質量 m の物体 B を質量 M の物体 A が滑車を介してひもで引っ張り h 移動したときの速さが V

それぞれの場合について速さ V を求めよ

(1)床が滑らかなとき(摩擦係数 0）

(2)動摩擦係数$\mu'$のとき

<b>(1)床が滑らかなとき(摩擦係数 0）</b>  
A について

- 変化前：質量 M の物体が高さ h の位置にあるときの位置エネルギー
- 変化後：質量 M の物体が速度 V で移動するときの運動エネルギー

<p>(力学的エネルギーの変化)　＝　（非保存力のした仕事）より</p>

$$ \frac{1}{2}MV^2 - Mgh = -Th ・・・①$$

B について

- 変化前：静止している物体の運動エネルギー
- 変化後：質量 m の物体が速度 V で移動するときの運動エネルギー

<p>(力学的エネルギーの変化)　＝　（非保存力のした仕事）より</p>

$$ \frac{1}{2}mV^2 - 0 = Th ・・・②$$

①+② より

$$※　 (\frac{1}{2}MV^2 + \frac{1}{2}mV^2) - Mgh = 0  $$

$$ \frac{1}{2}MV^2 + \frac{1}{2}mV^2 = Mgh $$

$$ \frac{1}{2}V^2(M+m) = Mgh $$

(1)床が滑らか(摩擦係数 0）な時の速さ V は

$$ V = \sqrt{\frac{2Mgh}{M + m}} $$

※補足

<b>ここで A、B の力学的エネルギーの変化の総和 = 0 　の形になっているのがポイント</b>

$$※　 (\frac{1}{2}MV^2 + \frac{1}{2}mV^2) - Mgh = 0 $$

<p>(力学的エネルギーの変化)　＝　（非保存力のした仕事）より</p>

A,B に働くエネルギーの総和で考えると、非保存力のした仕事は 0

A,B を一つの物体として考えた際には相互に働くひもの張力が打ち消しあい、非保存力のした仕事が 0 になるためである

<b>(2)動摩擦係数$\mu'$のとき ($M > \mu'm$とする）速さ V を求めよ</b>

前提として$ M > \mu'm$より

$$ Mg > \mu'mg $$

よって、物体 B にかかる動摩擦力より、物体 A の重力が引っ張る力の方が大きい(物体 B は滑る)

<p>(力学的エネルギーの変化)　＝　（非保存力のした仕事）より</p>

A,B を 1 つの物体として、各エネルギーの総和について考える

物体 B に対する摩擦力の仕事 $ W = -\mu'mgh $より

$$ ※　(\frac{1}{2}MV^2 + \frac{1}{2}mV^2) - Mgh = -\mu'mgh $$

$$ \frac{1}{2}(M + m)V^2 = (M - \mu'm)gh $$

$$ V^2 = \frac{2(M-\mu'm)gh}{M + m} $$

平方を取るとき、分子（$M-\mu'm$）がマイナスになるのが怖いが、前提条件として

$$ M > \mu'm$$

となっているため、それはない。よくできてるなァ

よって

$$ V = \sqrt{\frac{2(M-\mu'm)gh}{M + m}} $$

※補足

式を少し変形すると

$$ Mgh = \frac{1}{2}MV^2 + \frac{1}{2}mV^2 -\mu'mgh $$

<b>力学的エネルギー保存の範囲外であるが、$-\mu'mgh$を摩擦熱と捉えると(熱力学)<br>
一般的なエネルギー保存則が成り立っている</b>

### 参考

[高校の力学を全部解説する授業(前編)](https://www.youtube.com/watch?v=9XEX4mZFOhA)
