import Vue from 'vue';

export default function WithBorder (comp) {
    return Vue.component("WithBorder", {
        template: '<comp :style="borderStyle" v-bind="$props" v-on="$listeners" />',
        components: {
            comp
        },
        props: {
            msg: {
                required: false
            },
            color: {
                type: String,
                default: "red",
            },
            width: {
                type: String,
                default: "1px",
            }
        },
        computed: {
            borderStyle() {
                return {
                    borderStyle: "solid",
                    borderWidth: this.width,
                    borderColor: this.color,
                }
            }
        }
    });
}