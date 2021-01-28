import React from 'react'
import { Field } from 'formik'
import SelectControl from '../../controls/SelectControl'

const SelectField = ({ ...ownProps }) => (
  <Field {...ownProps}>
    {({ field, form }) => {
      const onChange = (value) => {
        form.setFieldValue(field.name, value)
      }

      return (
        <SelectControl
          {...field}
          {...ownProps}
          onChange={onChange}
          disabled={ownProps.disabled}
        />
      )
    }}
  </Field>
)

export default React.memo(SelectField)
