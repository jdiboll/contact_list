import React, { Component, PropTypes} from 'react';
import SSF from 'react-simple-serial-form';

export default class NewContact extends Component {
	static propTypes = {
		onAdd: PropTypes.func.isRequired
	}
	dataHandler(formData) {
		this.props.onAdd(formData);
	}


render () {
	return (
		<div className="formView">
			<h1>Add a Crony</h1>
				<SSF onData={::this.dataHandler}>
					<div>
						<label>
						 Name:
						<input type="text" name="name"/>
						</label>
					</div>
					<div>
						<label>
						 Email:
						<input type="text" name="email"/>
						</label>
					</div>
					<div>
						<label>
						 Phone:
						<input type="tel" name="phone"/>
						</label>
					</div>
					<div>
						<label>
						 Location:
						<input type="text" name="location"/>
						</label>
					</div>
					<div>
						<label>
						 Photo URL:
						<input type="url" name="photo"/>
						</label>
					</div>
					<button>Submit</button>
				</SSF>
		</div>



		)
	}
}