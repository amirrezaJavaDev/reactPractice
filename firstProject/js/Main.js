const app = document.getElementById('app');
const Button  = () =>(<button>Read More</button>)
const App = (
    <div>
        <h1>this is title</h1>
        <p> this is my exploring text  from beginning </p>
        <Button />
    </div>
)
ReactDOM.render(
    App
    ,
    app
)