import ArticleCard from "../ArticleCard"
import Column from "../Column"
import "./content.css"

function Content() {
    return (
        <>
            <div className="content">
                <Column />
                <Column />
                <Column />
            </div>
            <div class="articles">
                <ArticleCard />
                <ArticleCard />
            </div>
        </>

    )
}

export default Content