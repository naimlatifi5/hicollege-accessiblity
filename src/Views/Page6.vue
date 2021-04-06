<template>
  <div class="modal-page">
    <p>Lorem ipsum</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
      tincidunt aliquet placerat. Donec et tellus consectetur nisi congue
      hendrerit vitae non est. Phasellus pharetra ligula quis erat tincidunt
      consequat non non odio. Proin pretium ullamcorper cursus. Sed leo mauris,
      porttitor non ligula sit amet, pellentesque rutrum nisl. Donec nec
      tristique ex. Nam elit enim, pretium non lacus id, malesuada pretium elit.
      Duis id tellus nisi. Fusce lectus ante, aliquet in gravida in, pulvinar
      quis est. Phasellus lacinia massa quam, in consectetur enim posuere eget.
      Donec non eros nec justo dapibus placerat eu at sapien. Quisque orci
      augue, iaculis at ligula non, tempor rutrum neque. Duis et velit sagittis
      velit dapibus auctor vel aliquet ipsum. Cras condimentum sit amet sem
      mollis eleifend. Nunc gravida, ipsum at interdum scelerisque, metus turpis
      pharetra sem, vel blandit lorem risus ac leo. Donec dictum magna vel risus
      interdum, a bibendum diam tempus. Phasellus laoreet ex vel ligula
    </p>
     <div class="dialog_form_item">
      <label>
        <span class="label_text">
          City:
        </span>
        <input type="text" class="city_input_input" />
      </label>
    </div>
    <br/>
    <button type="button">This is a simple button</button>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
      tincidunt aliquet placerat. Donec et tellus consectetur nisi congue
      hendrerit vitae non est. Phasellus pharetra ligula quis erat tincidunt
      consequat non non odio. Proin pretium ullamcorper cursus. Sed leo mauris,
      porttitor non ligula sit amet, pellentesque rutrum nisl. Donec nec
      tristique ex. Nam elit enim, pretium non lacus id, malesuada pretium elit.
      Duis id tellus nisi. Fusce lectus ante, aliquet in gravida in, pulvinar
      quis est. Phasellus lacinia massa quam, in consectetur enim posuere eget.
      Donec non eros nec justo dapibus placerat eu at sapien. Quisque orci
      augue, iaculis at ligula non, tempor rutrum neque. Duis et velit sagittis
      velit dapibus auctor vel aliquet ipsum. Cras condimentum sit amet sem
      mollis eleifend. Nunc gravida, ipsum at interdum scelerisque, metus turpis
      pharetra sem, vel blandit lorem risus ac leo. Donec dictum magna vel risus
      interdum, a bibendum diam tempus. Phasellus laoreet ex vel ligula
      pellentesque, ac blandit nisi ornare. Quisque gravida magna sed tellus
      consequat pharetra. Donec auctor justo felis, eu maximus arcu feugiat
      vitae. Vestibulum volutpat aliquet nulla id tincidunt. Quisque
      sollicitudin volutpat dui, et tempus leo molestie nec. Aenean egestas arcu
      non vestibulum congue.
    </p>
    <br />
    <br />
    <ModalAccessible
      v-if="active"
      title="Cookie modal 2"
      @onClose="handleClose"
    />
  </div>
</template>

<script>
import ModalAccessible from '../components/accessibleModal'
export default {
  name: 'Page4',
  components: {
    ModalAccessible
  },
  data () {
    return {
      active: false
    }
  },
  mounted () {
    this.active = true
  },
  methods: {
    handleClose () {
      this.active = false
    }
  }
}
</script>
<style lang="scss" scoped>
.modal-page {
  max-width: 900px;
  margin: 0 auto;
}
</style>
