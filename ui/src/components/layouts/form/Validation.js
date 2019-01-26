import validator from 'validator'

const validatonMethods = {
  isEmail: value => validator.isEmail(value),
  isNotEmpty: value => !validator.isEmpty(value),
  isLength: (value, { min, max }) => validator.isLength(value, { min, max })
}

export default validatonMethods
