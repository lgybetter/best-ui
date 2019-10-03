import { BestUIComponent } from './components'

export type ButtonType = 'default' | 'primary' | 'info' | 'warn'

export declare class BTButton extends BestUIComponent {

  type?: ButtonType

  circle?: boolean
  
  icon?: string

  disabled?: boolean
}