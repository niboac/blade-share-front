/**
 * Created by yangshan on 2017/6/15.
 */
import { validateEmail, validatePass } from './form-validate-functions'
let rules = {
  email: [
    { required: true, trigger: 'blur', validator: validateEmail }
  ],
  password: [
    { required: true, trigger: 'blur', validator: validatePass }
  ]
}
export
{
  rules
}