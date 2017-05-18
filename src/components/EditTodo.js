import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form';

import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';
// import Button from 'react-bootstrap/lib/Button';
import {LinkContainer} from 'react-router-bootstrap'

const propTypes = {
  nom: PropTypes.string.isRequired,
  descripcio: PropTypes.string.isRequired,
  completat: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
}
const defaultProps = {
  nom: 'Nova tasca',
  descripcio: '',
  completat: false,
}

class EditTodo extends React.Component {
  render () {
    const {nom, descripcio, completat, match} = this.props
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom">Nom</label>
          <Field name="nom" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="descripcio">Description</label>
          <Field name="descripcio" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="completada">completat</label>
          <Field name="completada" component="input" type="checkbox"/>
        </div>
        <button type="submit">Submit</button>


              <ButtonToolbar>
                <LinkContainer to={`/todo/${match.params.topicId}`}>
                  <Button>Back</Button>
                </LinkContainer>
              </ButtonToolbar>
      </form>)
  }
}

EditTodo.propTypes = propTypes
EditTodo.defaultProps = defaultProps
// Decorate the form component
EditTodo = reduxForm({
  form: 'edit-todo' // a unique name for this form
})(EditTodo);
export default EditTodo;
