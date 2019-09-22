import firebase from '../FirebaseConnection';

export const checkLogin = () => {

	return (dispatch) => {

		let user = firebase.auth().currentUser;

		if(user) {
			dispatch({
				type:'changeStatus',
				payload:{
					status:1
				}
			});
		} else {
			dispatch({
				type:'changeStatus',
				payload:{
					status:2
				}
			});
		}

	}
};

export const signUpAction = (name, email, password) => {

    return (dispatch) => {
        //criando o usuario
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user)=>{
                //pegar o id do usuario que acabou de ser criado
                let uid = firebase.auth().currentUser.uid;
                //salvar esse usuario no banco no node users e seu nome
                firebase.database().ref('users').child(uid).set({
                    name:name
                });

                //retornar o valor do uid para salvar no reducer
                dispatch({
                    type:'changeUid',
                    payload:{
                        uid:uid
                    }
                });
            })
            .catch((error)=>{
                switch(error.code){
                    case 'auth/email-already-in-use':
                        alert('Email já utilizado!');
                        break;
                    case 'auth/invalid-email':
                        alert('Email inválido!');
                        break;
                    case 'auth/operation-not-allowed':
                        alert('Tente novamente mais tarde!');
                        break;
                    case 'auth/weak-password':
                        alert('Digite uma senha melhor!');
                        break;
                }
            });
    };
};

export const changeEmail = (email) => {

	return {
		type: 'changeEmail',
		payload:{
			email:email
		}
	}

};

export const changePassword = (pass) => {

	return {
		type: 'changePassword',
		payload:{
			pass:pass
		}
	}
};

export const changeName = (name) => {

	return {
		type: 'changeName',
		payload:{
			name:name
		}
	}
};