import Vue from 'vue'

import { BTButton } from './button'
import { BTCheckbox } from './checkbox'
import { BTCol } from './col';

export function install (vue: typeof Vue, options: any): void

export class Button extends BTButton {}
export class Checkbox extends BTCheckbox {}
export class Col extends BTCol {}