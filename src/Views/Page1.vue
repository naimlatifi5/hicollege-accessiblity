<template>
<main class="main">
    <h1>Input element</h1>
    <label for="name">Name:</label>
    <input id="name" type="text"/>
    <hr>
    <h1>Button element</h1>

    <button type="button" @click="clickMe">Button 1 </button>

    <button type="button">Button 2 </button>
    <button type="button">Button 3 </button>
    <h1>Select dropddown</h1>
    <select>
        <option value="value1">Fruit</option>
        <option value="value2">Banana</option>
        <option value="value3">Apple</option>
        <option value="value2">Orange</option>
    </select>
    <h2>Checkbox</h2>
    <input type="checkbox"> Fruit not in label
    <input type="checkbox"> Banana not in label
    <br/>
    <br/>
    <label for="checkbox-fruit">
        <input type="checkbox" name="checkbox-fruit" id="checkbox-fruit"/>
    Banana inside label
    </label>
    <label for="checkbox-fruit1">
        <input type="checkbox" name="checkbox-fruit" id="checkbox-fruit1" />
        Fruit inside label
    </label>
    <hr>
    <h2>Radio buttons</h2>
    <input type="radio" name="item">Item 1
    <input type="radio" name="item">Item 2
    <br/>
    <br/>
    <label for="item1">
        <input type="radio" name="item1" id="item1">Item 1 inside label
    </label>
    <label for="item2">
        <input type="radio" name="item1" id="item2">Item 2 inside label
    </label>
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
