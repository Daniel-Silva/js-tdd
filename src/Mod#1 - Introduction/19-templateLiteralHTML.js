const article = {
	title: 'Aprendendo Teplate String',
	intro: 'Uma breve explicação de como se utilizar teplate strings do ES6 em seu código hoje!',
	body:
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	tags: [ 'es6', 'js', 'template-literal' ]
};

const markup = `
    <article>
        <header>
            <h1>${article.title}</h1>
        </header>
        <section>
            <h4>${article.intro}</h4>
            <p>${article.body}</p>
        </section>
        <footer>
            <ul>
                ${article.tags.map((tag) => `<li>${tag}</li>`).join('')}
            </ul>
        </footer>
    </article>
`;
console.log(markup);
