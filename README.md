# Schlick's fast Bias Gain function

Schlick's fast version of Perlin's Bias and Gain functions, taken from [this paper by Jonathan T. Barron](https://arxiv.org/pdf/2010.09714.pdf).
Basically enables you to craft close estimates of the [Penner easing functions](https://easings.net/) or come up with your own, just by tweaking 2 parameters.

Check this [article for more details](https://blog.demofox.org/2012/09/24/bias-and-gain-are-your-friend/) and [great accompanying interactive demo](http://demofox.org/biasgain.html) of the function.

### Installation
```
npm i ayamflow/schlick-curve -S
```

### Usage
```js
import curve from 'schlick-curve'

function update) {
    let ease = curve(animation.progress, slope, threshold)
    camera.position.x = lerp(start, end, ease)
}
```
#### slope
- The curve will be straighter with `slope` closer to 1 (think linear easing)
- the curve will be very sloped with `slope` closer to 0 (think exponential easing)
#### threshold
- A value of 0.5 will yield a curve similar to an "in out" easing
- A value close to 1 will yield an "out" easing
- A value close to 0 will yield an "in" easing

### See also

[https://iquilezles.org/www/articles/functions/functions.htm](https://iquilezles.org/www/articles/functions/functions.htm)

[http://c0de517e.blogspot.com/2014/04/smoothen-your-functions.html](http://c0de517e.blogspot.com/2014/04/smoothen-your-functions.html)