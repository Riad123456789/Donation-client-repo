import { Helmet } from 'react-helmet-async';
import RegisterPage from './RegisterPage';

const ContactPage = () => {
    return (
        <div>
              <Helmet><title>  FOOD DONATION | CONTACT</title></Helmet>
            <RegisterPage></RegisterPage>
        </div>
    );
};

export default ContactPage;