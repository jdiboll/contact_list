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
						Title: Name
						<input type="text" title="name"/>
						</label>
					</div>
					<div>
						<label>
						Title: Email
						<input type="text" title="email"/>
						</label>
					</div>
					<div>
						<label>
						Title: Phone
						<input type="tel" title="phone"/>
						</label>
					</div>
					<div>
						<label>
						Title: Location
						<input type="text" title="location"/>
						</label>
					</div>
					<div>
						<label>
						Title: Photo URL
						<input type="url" title="photo"/>
						</label>
					</div>
					<button>Submit</button>
				</SSF>
		</div>



		)
	}
}