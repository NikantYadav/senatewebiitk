import AuthorCard from "@/components/AuthorCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { getActiveLanguages, getLanguageObj } from "@/lib/languageParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { Author } from "@/types";
import path from "path";

const Authors = ({ params }: { params: { lang: string } }) => {
  const language = getLanguageObj(params.lang);
  const authorIndex: Author = getListPage(
    path.join(language.contentDir, "team/_index.md"),
  );
  const authors: Author[] = getSinglePage(
    path.join(language.contentDir, "team"),
  );
  const { title, meta_title, description, image } = authorIndex.frontmatter;
  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title}>
      </PageHeader>
      <section className="section-sm pb-0">
        <div className="container">
          <div className="row justify-center">
            {authors.map((author: Author, index: number) => (
              <div className="mb-14 md:col-6 lg:col-4" key={index}>
                <AuthorCard data={author} lang={params.lang} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div style={styles.container}>
            <section style={styles.section}>
                <h2 style={styles.subheading}>Office Bearers</h2>
                <ul style={styles.list}>
                    <li style={styles.listItem}><strong>Chairperson, Students' Senate:</strong> Siddhant Jakhotiya (<a href="mailto:chair_ss@iitk.ac.in" style={styles.link}>chair_ss@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}><strong>President, Students' Gymkhana:</strong> Dhruv Misra (<a href="mailto:presidentsg@iitk.ac.in" style={styles.link}>presidentsg@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}><strong>PG Secretary, Academics and Career:</strong> Yogesh Ram Gopal Singh (<a href="mailto:pg_anc@iitk.ac.in" style={styles.link}>pg_anc@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}><strong>UG Secretary, Academics and Career:</strong> Utkarsh Gupta (<a href="mailto:ug_anc@iitk.ac.in" style={styles.link}>ug_anc@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}><strong>General Secretary, Games and Sports:</strong> Vaibhav Kadiyan (<a href="mailto:sportsecy@iitk.ac.in" style={styles.link}>sportsecy@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}><strong>General Secretary, Media and Cultural:</strong> Lakshay Gupta (<a href="mailto:mncsecy@iitk.ac.in" style={styles.link}>mncsecy@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}><strong>General Secretary, Science and Technology:</strong> Hardik Agrawal (<a href="mailto:sntsecy@iitk.ac.in" style={styles.link}>sntsecy@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}><strong>Parliamentarian:</strong> Ujjawal Agarwal (<a href="mailto:aujjwal22@iitk.ac.in" style={styles.link}>aujjwal22@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}><strong>Finance Convener:</strong> Srijan Kumar (<a href="mailto:srijanbhs@iitk.ac.in" style={styles.link}>srijanbhs@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}><strong>Convener, CoSHA:</strong> Chiranshu Kataria (<a href="mailto:cosha@iitk.ac.in" style={styles.link}>cosha@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}><strong>Convener, CoFA:</strong> Neerav Sethi (<a href="mailto:neeravs21@iitk.ac.in" style={styles.link}>neeravs21@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}><strong>Convener, CAC:</strong> Akshay Chaudhary (<a href="mailto:akshayc21@iitk.ac.in" style={styles.link}>akshayc21@iitk.ac.in</a>)</li>
                </ul>
            </section>

            <section style={styles.section}>
                <h2 style={styles.subheading}>Senators BT/BS Y24</h2>
                <ul style={styles.list}>
                    <li style={styles.listItem}>Aryaman Oberoi</li>
                    <li style={styles.listItem}>Atharv Dubey</li>
                    <li style={styles.listItem}>Daksh Gupta</li>
                    <li style={styles.listItem}>Namya Mayur Jarag</li>
                    <li style={styles.listItem}>Ranjan Ojha</li>
                    <li style={styles.listItem}>Shikhar Gupta</li>
                    <li style={styles.listItem}>Spandan Kapil Patil</li>
                    <li style={styles.listItem}>Vatsal Jain</li>
                </ul>
            </section>

            <section style={styles.section}>
                <h2 style={styles.subheading}>Senators BT/BS Y23</h2>
                <ul style={styles.list}>
                    <li style={styles.listItem}>Aditya Sati (<a href="mailto:aityasati23@iitk.ac.in" style={styles.link}>aityasati23@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}>Arihant Satpathy (<a href="mailto:arihants23@iitk.ac.in" style={styles.link}>arihants23@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}>Divi Pothikuchi (<a href="mailto:divip23@iitk.ac.in" style={styles.link}>divip23@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}>Divyaman Pal (<a href="mailto:divyamp23@iitk.ac.in" style={styles.link}>divyamp23@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}>Harshul Kamboj (<a href="mailto:harshulka23@iitk.ac.in" style={styles.link}>harshulka23@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}>Jaiveer Deepak Sabharwal (<a href="mailto:dsjaiveer23@iitk.ac.in" style={styles.link}>dsjaiveer23@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}>Prasun Shrivastav (<a href="mailto:prasuns23@iitk.ac.in" style={styles.link}>prasuns23@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}>Vedant Shekhar Tiwari (<a href="mailto:vedantst23@iitk.ac.in" style={styles.link}>vedantst23@iitk.ac.in</a>)</li>
                </ul>
            </section>

            <section style={styles.section}>
                <h2 style={styles.subheading}>Senators BT/BS Y22</h2>
                <ul style={styles.list}>
                    <li style={styles.listItem}>Aditya Raj Mishra (<a href="mailto:adityarm22@iitk.ac.in" style={styles.link}>adityarm22@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}>Anukalp Rai (<a href="mailto:ranukalp22@iitk.ac.in" style={styles.link}>ranukalp22@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}>Chhayank Garg (<a href="mailto:chhayankg22@iitk.ac.in" style={styles.link}>chhayankg22@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}>Chiranshu Kataria (<a href="mailto:kataria22@iitk.ac.in" style={styles.link}>kataria22@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}>Nikant Yadav (<a href="mailto:nikant22@iitk.ac.in" style={styles.link}>nikant22@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}>Ram Ratan Aggarwal (<a href="mailto:ramratan22@iitk.ac.in" style={styles.link}>ramratan22@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}>Ujjawal Agarwal (<a href="mailto:aujjwal22@iitk.ac.in" style={styles.link}>aujjwal22@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}>Yash Giri (<a href="mailto:yashg22@iitk.ac.in" style={styles.link}>yashg22@iitk.ac.in</a>)</li>
                </ul>
            </section>

            <section style={styles.section}>
                <h2 style={styles.subheading}>Senators BT/BS Y21</h2>
                <ul style={styles.list}>
                    <li style={styles.listItem}>Abhiraj Akhouri (<a href="mailto:abhiraja21@iitk.ac.in" style={styles.link}>abhiraja21@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}>Dinesh Choudhary (<a href="mailto:dineshc21@iitk.ac.in" style={styles.link}>dineshc21@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}>Prassun Duggar (<a href="mailto:prassund21@iitk.ac.in" style={styles.link}>prassund21@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}>Ritam Acharya (<a href="mailto:ritam21@iitk.ac.in" style={styles.link}>ritam21@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}>Siddhant Jakhotiya (<a href="mailto:siddhantj21@iitk.ac.in" style={styles.link}>siddhantj21@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}>Sourav Sharma (<a href="mailto:souravsh21@iitk.ac.in" style={styles.link}>souravsh21@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}>Srijan Kumar (<a href="mailto:srijanbhs@iitk.ac.in" style={styles.link}>srijanbhs@iitk.ac.in</a>)</li>
                    <li style={styles.listItem}>Supritum Karmakar</li>
                </ul>
            </section>

            <section style={styles.section}>
    <h2 style={styles.subheading}>Senators BT/BS-MT/MS/MBA/MDes Y20</h2>
    <ul style={styles.list}>
        <li style={styles.listItem}>Kinshuk Siyol (<a href="mailto:kinshuks20@iitk.ac.in" style={styles.link}>kinshuks20@iitk.ac.in</a>)</li>
    </ul>
</section>

<section style={styles.section}>
    <h2 style={styles.subheading}>Senators M.Tech (2 Year) Y24</h2>
    <ul style={styles.list}>
        <li style={styles.listItem}>Manav Mani Tripathi</li>
        <li style={styles.listItem}>Abhishek Dixit</li>
        <li style={styles.listItem}>Pankaj Singh</li>
        <li style={styles.listItem}>Viswa Prasad S V</li>
    </ul>
</section>

<section style={styles.section}>
    <h2 style={styles.subheading}>Senators M.Tech (2 Year) Y23</h2>
    <ul style={styles.list}>
        <li style={styles.listItem}>Rahul Poddar (<a href="mailto:prahul23@iitk.ac.in" style={styles.link}>prahul23@iitk.ac.in</a>)</li>
        <li style={styles.listItem}>Shubham Mansingh Pawar (<a href="mailto:shubhammp23@iitk.ac.in" style={styles.link}>shubhammp23@iitk.ac.in</a>)</li>
        <li style={styles.listItem}>Sourabh Shyamal (<a href="mailto:sourabhs23@iitk.ac.in" style={styles.link}>sourabhs23@iitk.ac.in</a>)</li>
        <li style={styles.listItem}>Shubham Chaudhary (<a href="mailto:shubhamc23@iitk.ac.in" style={styles.link}>shubhamc23@iitk.ac.in</a>)</li>
    </ul>
</section>

<section style={styles.section}>
    <h2 style={styles.subheading}>Senators MSc Y24 (including MSc-PhD Y24)</h2>
    <ul style={styles.list}>
        <li style={styles.listItem}>Lavanya Pareek</li>
        <li style={styles.listItem}>Aditi Gupta</li>
    </ul>
</section>

<section style={styles.section}>
    <h2 style={styles.subheading}>Senators MSc Y23 (including MSc-PhD Y23)</h2>
    <ul style={styles.list}>
        <li style={styles.listItem}>Madhav (<a href="mailto:madhavm23@iitk.ac.in" style={styles.link}>madhavm23@iitk.ac.in</a>)</li>
        <li style={styles.listItem}>Pranav Kumar Anupam (<a href="mailto:panupam@iitk.ac.in" style={styles.link}>panupam@iitk.ac.in</a>)</li>
    </ul>
</section>

<section style={styles.section}>
    <h2 style={styles.subheading}>Senators MSR</h2>
    <ul style={styles.list}>
        <li style={styles.listItem}>Shubham Madhav Patil (<a href="mailto:pshubham22@iitk.ac.in" style={styles.link}>pshubham22@iitk.ac.in</a>)</li>
    </ul>
</section>

<section style={styles.section}>
    <h2 style={styles.subheading}>Senators MBA, MDes and other two-year programmes Y23</h2>
    <ul style={styles.list}>
        <li style={styles.listItem}>Surajkumar Suntha (<a href="mailto:dssuraj23@iitk.ac.in" style={styles.link}>dssuraj23@iitk.ac.in</a>)</li>
    </ul>
</section>

<section style={styles.section}>
    <h2 style={styles.subheading}>Senators PhD Y24 (including MSc-PhD Y22)</h2>
    <ul style={styles.list}>
        <li style={styles.listItem}>Adarsh Tiwari</li>
        <li style={styles.listItem}>Ashwani Kumar</li>
    </ul>
</section>

<section style={styles.section}>
    <h2 style={styles.subheading}>Senators PhD Y23 (including MSc-PhD Y21)</h2>
    <ul style={styles.list}>
        <li style={styles.listItem}>Pratiksha Vasant Jadhav (<a href="mailto:pratikshaj23@iitk.ac.in" style={styles.link}>pratikshaj23@iitk.ac.in</a>)</li>
        <li style={styles.listItem}>Ramswroop Ishram (<a href="mailto:ramswroopi23@iitk.ac.in" style={styles.link}>ramswroopi23@iitk.ac.in</a>)</li>
        <li style={styles.listItem}>Shivam Tanwar (<a href="mailto:shivamtan23@iitk.ac.in" style={styles.link}>shivamtan23@iitk.ac.in</a>)</li>
    </ul>
</section>

<section style={styles.section}>
    <h2 style={styles.subheading}>Senators PhD Y21 and earlier batches (including MSc-PhD Y19)</h2>
    <ul style={styles.list}>
        <li style={styles.listItem}>Alok Jaiswal (<a href="mailto:alokj21@iitk.ac.in" style={styles.link}>alokj21@iitk.ac.in</a>)</li>
        <li style={styles.listItem}>Anoop Rathore (<a href="mailto:anoopra21@iitk.ac.in" style={styles.link}>anoopra21@iitk.ac.in</a>)</li>
        <li style={styles.listItem}>Keesanth Singh C (<a href="mailto:keesanth@iitk.ac.in" style={styles.link}>keesanth@iitk.ac.in</a>)</li>
        <li style={styles.listItem}>Md Faiz Akhtar (<a href="mailto:faiza21@iitk.ac.in" style={styles.link}>faiza21@iitk.ac.in</a>)</li>
        <li style={styles.listItem}>Mohd Javed (<a href="mailto:javedm@iitk.ac.in" style={styles.link}>javedm@iitk.ac.in</a>)</li>
        <li style={styles.listItem}>Satyam Kumar (<a href="mailto:satyamk@iitk.ac.in" style={styles.link}>satyamk@iitk.ac.in</a>)</li>
        <li style={styles.listItem}>Shivam Trivedi</li>
        <li style={styles.listItem}>Shubham Saxena (<a href="mailto:shubs20@iitk.ac.in" style={styles.link}>shubs20@iitk.ac.in</a>)</li>
    </ul>
</section>

                    
        </div>
      
    </>
  );
};

const styles = {
  container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
  heading: {
      textAlign: 'center',
      fontSize: '36px',
      marginBottom: '30px',
      color: '#4B4B4B',
  },
  subheading: {
      fontSize: '24px',
      marginBottom: '20px',
      color: '#333',
      borderBottom: '2px solid #F1C40F',
      paddingBottom: '5px',
  },
  section: {
      marginBottom: '40px',
  },
  list: {
      listStyleType: 'none',
      paddingLeft: '0',
  },
  listItem: {
      fontSize: '18px',
      marginBottom: '10px',
      color: '#555',
  },
  link: {
      color: '#2980B9',
      textDecoration: 'none',
  },
};

export default Authors;

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export async function generateStaticParams() {
  return getActiveLanguages().map((language) => ({
    lang: language.languageCode,
  }));
}
