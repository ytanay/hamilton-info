import React, {Component} from 'react';
import './App.css';

import 'reactstrap';
import {Collapse, Nav, Navbar, NavbarToggler, NavItem} from "reactstrap";
import NavbarBrand from "reactstrap/es/NavbarBrand";
import NavLink from "reactstrap/es/NavLink";


const PARTS = [
    ['credits', 'קרדיטים'],
    ['summary', 'תקציר Act 1'],
    ['characters', 'הדמויות'],
    ['vocab', 'מילון']
];

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return <React.Fragment>
            <Navbar fixed="top" expand="md" dark color="dark">
                <NavbarBrand>Hamilton | Act 2</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>


                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {PARTS.map(part =>
                            <NavItem>
                                <NavLink key={part[0]} href={'#' + part[0]}>{part[1]}</NavLink>
                            </NavItem>)}
                    </Nav>
                </Collapse>
            </Navbar>

            <main role="main" className="container">
                <header>
                    <h1>Hamilton<br/>Act II</h1>
                </header>
                <section id="credits">
                    <h2>קרדיטים</h2>
                    <div className="condensed">
                        <p><strong>אלכסנדר המילטון א':</strong><span>&nbsp;איתמר פרוכטר</span></p>
                        <p><strong>אלכסנדר המילטון ב':</strong><span>&nbsp;יואב גור אריה</span></p>
                        <p><strong>ארון בר:</strong><span>&nbsp;יותם תנאי</span></p>
                        <p><strong>תומאס ג'פרסון:</strong><span>&nbsp;נטע זייטק</span></p>
                        <p><strong>ג'יימס מדיסון:</strong><span>&nbsp;עמית מוזיקנסקי</span></p>
                        <p><strong>אלייזה סקיילר:</strong><span>&nbsp;שקד ברש</span></p>
                        <p><strong>אנג'ליקה סקיילר:</strong><span>&nbsp;נוי עזר</span></p>
                        <p><strong>ג'ורג' וושינגטון:</strong><span>&nbsp;סער רז</span></p>
                        <p><strong>פיליפ המילטון:</strong><span>&nbsp;יונתן דנקנר/דרור קירנן</span></p>
                        <p><strong>המלך ג'ורג' השלישי:</strong><span>&nbsp;ברקת סרוסי</span></p>

                        <p><strong>מריה ריינולדס:</strong><span>&nbsp;נועה לינדר</span></p>
                        <p><strong>ג'יימס ריינולדס:</strong><span>&nbsp;גיא פרי</span></p>
                        <p><strong>ג'ורג' איקר:</strong><span>&nbsp;ג'וש קלרק/תום קלוורי</span></p>
                        <p><strong>מקהלה:</strong><span>&nbsp;ברקת סרוסי, ג'וש קלרק, גיא פרי,דרור קירנן, יעל קירקפטריק, ליעד בן שחר, מיה צוק, נטלי הוויט, נטע אליהו, נטע ליכט, נעם סולוביצ׳יק, נעמי גילס, שי גרינברג</span>
                        </p>
                        <p><strong>צוות מוביל:</strong><span>&nbsp;עמית מוזיקנסקי, נטע זייטק, יותם תנאי, ירדן קשת, נועה לינדר, אלעד שיפטן, יאיר ברמן</span>
                        </p>

                        <p><strong>סיפור מסגרת:</strong><span>&nbsp;אלעד שיפטן, יאיר ברמן, ירדן קשת</span></p>
                        <p>
                            <strong>כוריאוגרפיה:</strong><span>&nbsp;ירדן קשת, נטלי הוויט, נטע זייטק, עמית מוזיקנסקי, שי גרינברג</span>
                        </p>
                        <p><strong>בימוי:</strong><span>&nbsp;עמית מוזיקנסקי, ירדן קשת, נועה לינדר, נטע זייטק, עומרי גורן</span>
                        </p>
                        <p><strong>הפקה מוזיקלית:</strong><span>&nbsp;עמית מוזיקנסקי, נועה לינדר, יותם תנאי</span>
                        </p>

                        <p><strong>תלבושות:</strong><span>&nbsp;ברקת סרוסי, נטע ליכט, שקד ברש, שי גרינברג</span></p>

                        <p><strong>אביזרים:</strong><span>&nbsp;ג'וש קלרק, נטע ליכט</span></p>

                        <p><strong>גרפיקה:</strong><span>&nbsp;דרור קירנן, ליעד בן שחר,סער רז, עומרי גורן, שני רביד, תומר פיינר, יותם תנאי</span>
                        </p>
                        <p><strong>הגברה:</strong><span>&nbsp;אהד מרק</span></p>
                        <p><strong>תאורה:</strong><span>&nbsp;תומר גלון, מתן מירום</span></p>
                    </div>
                </section>

                <section id="summary">
                    <h2>תקציר עלילת Act 1</h2>
                    <p className="c1" dir="rtl">
                        <span className="c2">המערכה הראשונה של המחזמר, אשר הוצגה בבסיס בסוף דצמבר 2018, מספרת את תחילת הסיפור:</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">בשלהי המאה ה18: המילטון, מהגר יתום, עני, חסר כל ומבריק, מגיע לאמריקה בחיפוש אחר הזדמנויות שהבית שלו לא מסוגל לספק לו.</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">בהגיעו לאמריקה הוא מצטרף למלחמת העצמאות האמריקאית, עולה בדרגות ומקבל הכרה על חוכמתו וכישוריו.</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">בדרך הוא מספיק להתחבר לארון בר, מתחתן עם אליזה סקיילר (ולפי השמועות, שומר על קשר "קרוב" עם אחותה אנג'ליקה סקיילר) ואף נהייה יד ימינו של הגנרל הראשי של הצבא האמריקאי - ג'ורג' וושינגטון.</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">בסוף המחצית הראשונה נולד לו בן בשם פיליפ ומכאן מתחיל סיפורנו.</span>
                    </p>
                    <p className="c19" dir="rtl">
                        <strong>מה יהיה על האומה החדשה? איך גנרל ומהפכן חצוף ישתלב בסדר החדש? אילו עוד דמויות ותהפוכות
                            יגיעו?</strong>
                    </p>
                </section>


                <section id="vocab" className="condensed">
                    <h2>מילים שכדאי לדעת</h2>
                    <p className="c1" dir="rtl">
                        <span className="c2">Administration - ממשל, שלטון</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">Constitution - חוקה</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">Election - בחירות</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">Treasury - אוצר</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">Secretary - שר</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">Senator - חבר הסנאט, אחד מבתי הנבחרים האמריקאים</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">Satisfied - מרוצה</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">Shot - הזדמנות (גם ירייה, שוט)</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">Helpless - חסר אונים</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">Slavery - עבדות</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">Pamphlet - חוברת</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">Obedient Servant - עבדך הנאמן</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">Legacy - מורשת</span>
                    </p>
                </section>

                <section id="characters">
                    <h2>הדמויות</h2>
                    <h3>אלכסנדר המילטון</h3>
                    <p className="c1" dir="rtl">
                        <span className="c21 c11 c16">איך ממזר, יתום, מהגר, שנולד מחוץ לנישואין בקאריביים בעיירה נידחת, מוזנחת וענייה הופך להיות אחד מהאבות המייסדים, מהמקימים של המדינה?</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c11">ילדותו של המילטון הייתה קשה. הוא נולד ב1757. כשהיה בן 10 אביו נטש אותו, ובגיל 12 אימו מתה ממחלה קשה. הוא הועבר למשמורת אצל בן דודו עד שזה התאבד. ב1772 הוריקן קטלני הכה בעיר שלו, אותו המילטון הגדיר "</span>
                        <span
                            className="c2">the most dreadful hurricane that memory or any records whatever can trace”</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">המשפט הזה מופיע במכתב אותו כתב המילטון לאביו. המכתב המרשים הזה פורסם בעיתון מקומי וזכה לתהודה עצומה - עד כדי כך שהעיירה אספה עבורו כסף כדי לשלוח אותו לאמריקה כדי שישלים שם את לימודיו.</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">כך בשנת 1772 המילטון עובר אל ניו ג'רזי שבשלוש עשרה המושבות באמריקה. במקביל ללימודיו החל בפעילות פוליטית נגד השלטון הבריטי. הוא פרסם כתבות באנונימיות נגד השלטון, תקף חוקים ותמך במהפכנות.</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">המילטון, להוט להביס את השלטון הבריטי, מצטרף לצבא הקונטיננטלי בפיקודו של ג'ורג וושינגטון. גנרלים רבים הזמינו אותו לסייע להם, אבל הוא העדיף להילחם בעצמו בשדה הקרב. כלומר, עד שוושינגטון בעצמו הציע לו להיות יד ימינו - ולהצעה הזאת אי אפשר לסרב.</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c11">המילטון עובר תהפוכות רבות - הוא משתתף בדו קרב נגד </span>
                        <span>גנרל</span>
                        <span className="c2">&nbsp;שמפיץ שמועות ושקרים נגד וושינגטון, וסופג מוושינגטון עצמו כעס רב על כך. הוא מוביל את הקרב על יורקטאון נגד הצבא הבריטי, ולמעשה בכך מנצח את הקרב האחרון של המלחמה.</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">אם יש משפט אחד שמסכם את המילטון של המערכה הראשונה הוא I'm not throwing away my shot. המילטון לא מחמיץ אף הזדמנות, לא שומר אף מחשבה בבטן. הוא כותב מחונן, צעיר, נלהב ואנרגטי. הוא נאמן לערכים שלו, ולא מהסס לעשות דבר כדי לשמור ולהילחם עליהם.</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c11">אבל החיים הפוליטיים הם לא שדה הקרב. התכונות שקידמו את המילטון במלחמה עלולות להוות לו מכשול כעת. הקרבות האישיים והפוליטיים יתערבבו אחד בשני. אילו מחירים ישלם המילטון על הדבקות במטרה? מי יישאר נאמן </span>
                        <span>לו </span>
                        <span className="c2">? למי הוא יישאר נאמן? מי יישארו חבריו? מי יהפכו לאויביו?</span>
                    </p>

                    <p className="c1" dir="rtl">
                        <span className="c2">את המילטון ישחק בחלק הראשון של המערכה איתמר פרוכטר, ובחלק השני יואב גור אריה.</span>
                    </p>
                    <h3>ארון בר</h3>
                    <p className="text-left">
                        <em dir="ltr">Talk less, Smile more, Don’t let them know what you against and what you are
                            for.</em>
                    </p>

                    <p className="c1" dir="rtl">
                        <span className="c2">המחזמר מתחיל כאשר המילטון פוגש את בר, בשנת 1776. שניהם יתומים, שניהם תלמידים מבריקים, שניהם להוטים להשפיע פוליטית ולהביס את הבריטים. </span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">בעוד המילטון לא שומר דבר בבטן, בר מעדיף לשמור את הקלפים קרוב לחזה, לראות איך הדברים מתנהלים ורק אז לפעול.</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">אבל המסלולים של המילטון ובר לא תמיד הולכים ביחד. בר רוצה לקדם את הקריירה הצבאית שלו, בזמן שהמילטון מצליח להתקרב לבכירי הצבא ומתקדם. בר מציע לוושינגטון להיות העוזר שלו, בעוד שזה רוצה את המילטון לתפקיד.</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">במהלך המערכה הראשונה בר מנהל רומן עם אשתו של קצין בריטי. אחרי שהקצין מת בר מתחתן איתה ונולדת להם בת.</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">האם החברים הטובים משדה הקרב ישארו חברים במלחמה הפוליטית? האם סיפור החיים של שניהם ימשיך ללכת באותו מסלול? מערכת היחסים בין בר להמילטון מלווה את המחזמר מתחילתו ועד הסוף המצמרר והמפתיע.</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">את בר ישחק יותם תנאי.</span>
                    </p>

                    <h3>אלייזה ואנג'ליקה</h3>
                    <p className="c1" dir="rtl">
                        <span className="c2">שתי האחיות, בנותיו של פיליפ סקיילר. </span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">סיפורן עם המילטון מתחיל ב1780, אז הוא ובר הולכים לנשף של פיליפ סקיילר. בנשף, המילטון תחילה מכיר את אנג'ליקה. במקביל, גם אלייזה פוגשת בהמילטון ומתאהבת בו, ואנג'ליקה מחליטה לשדך בינהם. </span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">אלייזה והמילטון מתחתנים באושר, ובמהלך המלחמה אלייזה מגלה להמילטון שהיא בהריון. </span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">סיפורן של האחיות מסתבך כשאנחנו מגלים שאנג'ליקה מאוהבת גם היא בהמילטון. היא מספרת שהיא נמשכת אליו גם אינטלקוטאלית וגם פיזית - ובלי ספק הקשר בינה לבין המילטון ממשיך להשאר חזק. אנג'ליקה, שמאוד אוהבת את אחותה, מוכנה לשים בצד את רגשותייה כדי שאחותה תשאר מאושרת.</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">להיות אשתו של המילטון זה אומנם חלומן של נשים רבות (והיסטורית - גם כמה גברים), אך זה מגיע עם מחיר כבד. עד כמה יהיה מוכן לסכן המילטון את מערכת היחסים שלו והמשפחה למען המולדת והמדינה? האם המחיר שישלם באמת נדרש?</span>
                    </p>
                    <p className="c1" dir="rtl">
                        <span className="c2">את אלייזה תשחק שקד ברש. את אנג'ליקה תשחק נוי עזר.</span>
                    </p>

                </section>

            </main>

        </React.Fragment>
    }
}

export default App;
