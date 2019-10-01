import Vue from 'vue'

import { BTButton } from './button'
import { BTCheckbox } from './checkbox'

export function install (vue: typeof Vue, options: any): void

export class Button extends BTButton {}
export class Checkbox extends BTCheckbox {}