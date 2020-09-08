<template>
<main>
    <h1>Input element</h1>
    <input type="text"/>
    <hr>
    <h1>Button element</h1>
    <button type="text">Button 1 position as first</button>
    <button type="text">Button 2 focus in element order in DOM</button>
    <button type="text">Button 3 position as third</button>
    <h1>Select dropddown</h1>
    <select>
        <option value="value1">Fruit</option>
        <option value="value2">Banana</option>
        <option value="value3">Apple</option>
        <option value="value2">Orange</option>
    </select>
    <hr>
    <h2>Not focusable elements</h2>
    <div>
        <h2>Some heading</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et tristique nisi. Vivamus at purus ac sem imperdiet auctor ac eu purus. Vivamus elementum nibh nec nisi lobortis, eget scelerisque ex sagittis. Quisque sollicitudin non dui vel tincidunt. Nullam elit felis, ornare non neque at, tempor porta justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. In nunc nulla, consectetur eu finibus non, finibus et nisl</p>
        <img src="https://media.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy.gif" alt="">
    </div>
</main>
</template>

<script>
/**
 * TODOS create an html form without
 */
export default {
  name: 'Page1'
}
</script>
