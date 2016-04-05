import React, { Component, PropTypes} from 'react';
import SSF from 'react-simple-serial-form';
import Dropzone from 'react-dropzone';

export default class NewContact extends Component {
	static propTypes = {
		onAdd: PropTypes.func.isRequired
	}

	constructor () {
		super ();
		this.state = {
			preview: 'https://www.youthcorps.sg/ContentImages/image_placeholder.png'
		}
	}

	dataHandler(formData) {
		this.props.onAdd(formData);
	}
	dropHandler([file]) {
		console.log(file);
		this.setState({preview: file.preview});
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
						<Dropzone onDrop={::this.dropHandler}>
							Add Your Photo Here
							<img src={this.state.preview} width="50px" height="50px"/>
							<input type="hidden" value={this.state.preview} name="photo"/>
						</Dropzone>
					</div>
					<button>Submit</button>
				</SSF>
		</div>



		)
	}
}



