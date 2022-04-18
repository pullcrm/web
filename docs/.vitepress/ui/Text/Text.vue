<script>
import { h } from 'vue'

export default {
  props: {
    text: {
      type: String,
      default: ''
    },

    size: {
      type: String,
      default: 'm'
    },

    tag: {
      type: String,
      default: 'div'
    },

    strong: {
      type: Boolean,
      default: false
    },

    responsive: {
      type: Boolean,
      default: false
    },

    leftIcon: {
      type: String,
      default: undefined
    },

    rightIcon: {
      type: String,
      default: undefined
    }
  },

  render() {
    /* Prepend */
    let prepend = null
    if (this.leftIcon) {
      prepend = h('div', { class: 'ui-text__prepend' }, [
        h(UiIcon, {
          name: this.leftIcon,
          size: 'inherit'
        })
      ])
    } else if (this.$slots.prepend) {
      prepend = h('div', { class: 'ui-text__prepend' },
        this.$slots.prepend()
      )
    }

    /* Append */
    let append = null
    if (this.rightIcon) {
      append = h('div', { class: 'ui-text__append' }, [
        h(UiIcon, {
          name: this.rightIcon,
          size: 'inherit'
        })
      ])
    } else if (this.$slots.append) {
      append = h('div', { class: 'ui-text__append' },
        this.$slots.append()
      )
    }

    /* Content */
    let content = this.$slots.default
      ? this.$slots.default()
      : this.text
    if (append || prepend) {
      content = h('div', { class: 'ui-text__content' }, content)
    }

    // if (this.tag !== 'RouterLink') {
    //   data.on = data.nativeOn
    //   data.nativeOn = undefined
    // }

    return h(this.tag, {
      // ...data,
      // attrs: this.attrs,
      class: [
        'ui-text',
        `ui-text_size_${this.size}`,
        { 'ui-text_strong': this.strong },
        { 'ui-text_responsive': this.responsive },
        { 'ui-text_has-append': Boolean(append) },
        { 'ui-text_has-prepend': Boolean(prepend) },
        // data.class
      ]
    }, [
      prepend,
      content,
      append
    ].filter(Boolean))
  }
}
</script>

<style lang="scss" src="./Text.scss"></style>
