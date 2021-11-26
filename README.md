# mofron-comp-arrow
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

arrow component for mofron

## Attention
 - right.svg must be in the proper position to use this component.

# Install
```
npm install mofron mofron-comp-arrow
```

# Sample
```html
<setting>
    <tag load="mofron-comp-right">Arrow</tag>
    
    <html-style>
        <mf-access device=mobile orientation=portrait>font-size:625%;</mf-access>
        <mf-access device=mobile orientation=landscape>font-size:800%;</mf-access>
        <mf-access device=tablet>font-size:800%;</mf-access>
    </html-style>
    <root-conf>
        <theme>
            <Text:config font="'M PLUS Rounded 1c'"></Text:config>
        </theme>
    </root-conf>
</setting>

<Arrow path="./img/arrow.svg" size=(3rem,2.5rem)></Arrow>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| | type | string | arrow direction (right,left,up,down) |
| | size | size | horizon size of arrow |
| | | size | vertical size of arrow |

