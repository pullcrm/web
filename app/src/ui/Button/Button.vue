<script lang="ts">
import type { VNode } from 'vue'
import { defineComponent, h } from 'vue'

import UiIcon from '../Icon/Icon.vue'
import UiIconLoader from '../IconLoader/IconLoader.vue'

export default defineComponent({
  props: {
    tag: {
      type: String,
      default: 'button',
    },

    type: {
      type: String,
      default: 'button',
    },

    theme: {
      type: String,
      default: 'primary',
    },

    leftIcon: {
      type: String,
      default: undefined,
    },

    rightIcon: {
      type: String,
      default: undefined,
    },

    size: {
      type: String,
      default: 'l',
    },

    loading: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    responsive: {
      type: Boolean,
      default: false,
    },
  },

  render() {
    function createAppend(children: VNode[]) {
      return h('span', { class: 'ui-button__append' }, children)
    }

    function createPrepend(children: VNode[]) {
      return h('span', { class: 'ui-button__prepend' }, children)
    }

    function createContent(children: VNode[]) {
      return h('span', { class: 'ui-button__content' }, children)
    }

    function createLoader() {
      return h('span', { class: 'ui-button__loader' }, [
        h(UiIconLoader, {
          size: 's',
        }),
      ])
    }

    /* Prepend */
    let prepend = null
    if (this.leftIcon) {
      prepend = createPrepend([
        h(UiIcon, {
          name: this.leftIcon,
          size: 's',
        }),
      ])
    }
    else if (this.$slots.prepend) {
      prepend = createPrepend(
        this.$slots.prepend(),
      )
    }

    /* Append */
    let append = null
    if (this.rightIcon) {
      append = createAppend([
        h(UiIcon, {
          name: this.rightIcon,
          size: 's',
        }),
      ])
    }
    else if (this.$slots.append) {
      append = createAppend(
        this.$slots.append(),
      )
    }

    /* Loader */
    let loader = null
    if (this.loading)
      loader = createLoader()

    /* Content */
    let content
    if (
      !loader
      && !append
      && !prepend
      && this.$slots.default
      // slots().default?.every((node) => node.text)
    ) {
      // OPTIMIZATION:
      // Simplify `content` if there are only text nodes to decrease a number of DOM elements
      content = this.$slots.default()
    }
    else if (this.$slots.default) {
      content = createContent(
        this.$slots.default(),
      )
    }

    const tag = this.$attrs?.to
      ? 'RouterLink'
      : this.tag

    // if (tag !== 'RouterLink') {
    //   data.on = data.nativeOn
    //   data.nativeOn = undefined
    // }

    return h(tag, {
      // ...data,
      // attrs: {
      // ...data.attrs,
      type: tag === 'button' ? this.type : undefined,
      // },
      class: [
        'ui-button',
        `ui-button_size_${this.size}`,
        `ui-button_theme_${this.theme}`,
        {
          'ui-button_loading': this.loading,
          'ui-button_disabled': this.disabled,
          'ui-button_responsive': this.responsive,
        },
        // data.class
      ],
    }, [
      content,
      prepend,
      append,
      loader,
    ].filter(Boolean))
  },
})
</script>

<style lang="scss" src="./Button.scss" />
