import React, { Component, Proptypes} from 'react';
import SSF from 'react-simple-serial-form';

export default class NewContact extends Component {
	static Proptypes {
		onAdd: PropTypes.func.isRequired
	}
	dataHandler(formData) {
		this.props.onAdd(formData);
	}


render {
	return (
		<div className="formView">
			<h1>Add a Crony</h1>
				<SSF onData={this.dataHandler}>
					<div>
						<label>
						Title: "name"
						input type="text" title="Name">
						</label>
					</div>
					<div>
						<label>
						Title: "Email"
						input type="text" title="Email">
						</label>
					</div>
					<div>
						<label>
						Title: "phone"
						input type="tel" title="Phone">
						</label>
					</div>
					<div>
						<label>
						Title: "location"
						input type="text" title="Location">
						</label>
					</div>
					<div>
						<label>
						Title: "photo URL"
						input type="text" title="url">
						</label>
					</div>
					<button>Add New Contact</button>
				</SSF>
		</div>



		)
	}

}