import { loginFormValidationSchema } from './login-form-validation.schema';

describe('Login form validation schema', () => {
    describe('Password validation', () => {
        it('Should reject password if empty field provided', (done) => {
            loginFormValidationSchema
                .validateAt('password', {
                    password: '',
                    email: '',
                    keepLogged: false,
                })
                .catch((err) => {
                    expect(err.type).toBe('required');
                    done();
                });
        });
        it('Should reject password if shorter then 6 chars', (done) => {
            loginFormValidationSchema
                .validateAt('password', {
                    password: 'foo',
                    email: '',
                    keepLogged: false,
                })
                .catch((err) => {
                    expect(err.type).toBe('min');
                    done();
                });
        });
        it('Should reject password if no uppercase character provided', (done) => {
            loginFormValidationSchema
                .validateAt('password', {
                    password: 'asddasdsa1',
                    email: '',
                    keepLogged: false,
                })
                .catch((err) => {
                    expect(err.type).toBe('oneUpper');
                    done();
                });
        });
        it('Should reject password if no lowercase character provided', (done) => {
            loginFormValidationSchema
                .validateAt('password', {
                    password: 'ASDASD1',
                    email: '',
                    keepLogged: false,
                })
                .catch((err) => {
                    expect(err.type).toBe('oneLower');
                    done();
                });
        });
        it('Should reject password if no digit provided', (done) => {
            loginFormValidationSchema
                .validateAt('password', {
                    password: 'Asdasd',
                    email: '',
                    keepLogged: false,
                })
                .catch((err) => {
                    expect(err.type).toBe('oneDigit');
                    done();
                });
        });
        it('Should accept password if 1 digit, 1 upper, 1 lower and min 6 chars', (done) => {
            expect(
                loginFormValidationSchema.validateAt('password', {
                    password: 'Asdasd1',
                    email: '',
                    keepLogged: false,
                }),
            )
                .resolves.toBeDefined()
                .then(done);
        });
    });

    describe('Email validation', () => {
        it('Should reject email if empty field provided', (done) => {
            loginFormValidationSchema
                .validateAt('email', {
                    password: '',
                    email: '',
                    keepLogged: false,
                })
                .catch((err) => {
                    expect(err.type).toBe('required');
                    done();
                });
        });
        it('Should reject email if no proper email format provided', (done) => {
            loginFormValidationSchema
                .validateAt('email', {
                    password: '',
                    email: 'foobar',
                    keepLogged: false,
                })
                .catch((err) => {
                    /**
                     * Bug in yup, can't get type, so check errors array
                     * https://github.com/jquense/yup/issues/587
                     */
                    expect(err.errors.length).toBe(1);
                    done();
                });
        });
        it('Should pass if proper email provided', (done) => {
            expect(
                loginFormValidationSchema.validateAt('email', {
                    password: '',
                    email: 'lukasz@ostrowski.ninja',
                    keepLogged: false,
                }),
            )
                .resolves.toBeDefined()
                .then(done);
        });
    });
});
