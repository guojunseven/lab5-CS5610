import Header from './HeaderBox';
import Left from './LeftBox';
import Content from './Content';
import Right from './RightBox';
import Footer from './FooterBox';

export default function() {
    return <div id = 'container'>
        <Header />
        <Left />
        <Content />
        <Right />
        <Footer />
    </div>;
}