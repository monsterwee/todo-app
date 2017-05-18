import React, { PropTypes } from 'react'

import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';
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

class ShowTodo extends React.Component {
  render () {
    const {nom, descripcio, completat, match} = this.props
    return <div>
      <ul>
        <li>{match.params.topicId}</li>
        <li>{nom}</li>
        <li>{descripcio}</li>
        <li>{completat}</li>
      </ul>
      <ButtonToolbar>
        <LinkContainer to={`/todo/${match.params.topicId}/edit`}>
          <Button>Editar</Button>
        </LinkContainer>
      </ButtonToolbar>
    </div>
  }
}

ShowTodo.propTypes = propTypes
ShowTodo.defaultProps = defaultProps
export default ShowTodo;
