<template>
<main class="main">
    <h1>Input element</h1>
    <input type="text"/>
    <hr>
    <h1>Button element</h1>
    <button type="button">Button 1 position as first</button>
    <button type="button">Button 2 focus in element order in DOM</button>
    <button type="button">Button 3 position as third</button>
    <h1>Select dropddown</h1>
    <select>
        <option value="value1">Fruit</option>
        <option value="value2">Banana</option>
        <option value="value3">Apple</option>
        <option value="value2">Orange</option>
    </select>
    <h2>Checkbox</h2>
    <input type="checkbox"> Fruit
    <input type="checkbox"> Banana
    <hr>
    <label for="checkbox-fruit">
        <input type="checkbox" name="checkbox-fruit" id="checkbox-fruit"/>
    Banana
    </label>
    <label for="checkbox-fruit1">
        <input type="checkbox" name="checkbox-fruit" id="checkbox-fruit1" />
        Fruit
    </label>
    <hr>

    <h2>Radio buttons</h2>
    <input type="radio" name="item">Item 1
    <input type="radio" name="item">Item 2
    <h2>Not focusable elements- are by design</h2>
    <div>
        <h2>Some heading</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et tristique nisi. Vivamus at purus ac sem imperdiet auctor ac eu purus. Vivamus elementum nibh nec nisi lobortis, eget scelerisque ex sagittis. Quisque sollicitudin non dui vel tincidunt. Nullam elit felis, ornare non neque at, tempor porta justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. In nunc nulla, consectetur eu finibus non, finibus et nisl</p>
    </div>
</main>
</template>

<script>
export default {
  name: 'Page1'
}
</script>
<style lang="scss" scoped>
.main {
    max-width: 900px;
    margin: 0 auto;
}

</style>
