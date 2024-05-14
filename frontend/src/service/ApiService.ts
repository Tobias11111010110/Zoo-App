const base = 'http://localhost:8088';


export function submitLogin(email: string, password: string, onCatch: () => void, navigate: (location: string) => void) {
    fetch(base + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password})
    }).then(r => {
        switch (r.status) {
            case 200:
                console.log('login success');
                navigate('/')
                break;
            case 401:
                console.log('credentials are wrong');
                //TODO snackbar /popup
                break;
            case 500:
                console.log('server down');
                //TODO snackbar /popup
                break;
        }
    })
        .catch(error => {
            console.error('Error:', error);
            onCatch()
        });
}

export function submitRegistration(email: string, password: string, onCatch: () => void, navigate: (location: string) => void) {
    fetch(base + '/registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password})
    }).then(r => {
        switch (r.status) {
            case 200:
                console.log('login success');
                navigate('/')
                break;
            case 401:
                console.log('credentials are wrong');
                //TODO snackbar /popup
                break;
            case 500:
                console.log('server down');
                //TODO snackbar /popup
                break;
        }
    })
        .catch(error => {
            console.error('Error:', error);
            onCatch()
        });
}