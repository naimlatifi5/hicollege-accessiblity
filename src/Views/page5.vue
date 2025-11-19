<template>
  <div class="accordions">

    <button type="button">Hello button</button>
    <h2>Inaccessible accordions</h2>
    <AccordionNotAccessible />
    <AccordionNotAccessible />
    <br>
    <br>
    <br>
    <br>
    <h2>Accessible accordion</h2>
    <Accordion />
    <Accordion />
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import AccordionNotAccessible from '../components/accordionNotAccessible'
import Accordion from '../components/accordion'

export default {
  name: 'Page5',
  components: {
    AccordionNotAccessible,
    Accordion
  }
}
</script>
<style lang="scss" scoped>
.accordions {
  max-width: 900px;
  margin: 0 auto;
}
</style>
