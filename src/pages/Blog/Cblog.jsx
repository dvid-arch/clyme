function SecondaryHeader({ text }) {
    return (
        <h2 className='font-bold text-xl mt-6'>{text}</h2>
    )
}

function List({ numbered, title, list }) {
    let listStyle = 'px-8 list-decimal max-w-[800px] flex flex-col gap-4 py-4';
    if (!numbered) {
        listStyle = 'px-8 list-disc max-w-[800px] flex flex-col gap-4 py-4'
    }
    list = list.map(n => n.split(':'))
    // console.log(list)
    return (
        <div>
            {title && <SecondaryHeader text={title} />}
            <ul className={listStyle}>
                {list.map((n, i) => {
                    if (n.length > 1) {
                        return <li key={i}><span className='font-semibold'>{n[0]}: </span>{n[1]}</li>
                    }
                })}
            </ul>
        </div>
    )
}


function Paragraph({ text, header }) {
    return header ? (
        <div>
            <SecondaryHeader text={header} />
            <p className='leading-loose my-4 max-w-[80ch]'>
                {text}
            </p>
        </div>
    ) : <p>{text}</p>
}

function Title({ title, date }) {
    return <div className=" flex-1">
        <h1 className="text-4xl max-w-[600px] font-bold mb-2">
            {title}
        </h1>
        <h5 className='text-sm text-slate-600'>25th June 2024</h5>
    </div>
}


function Cblog({ blog }) {
    const {title, blogBody} = blog

    return (
        <div className='text-teal-950 max-w-[800px] tracking-wide text-[17px]'>
            <div className=' mt-20 p-4 rounded-lg bg-braccent mb-6 max-w-[800px]'>
                <Title title={title} />
            </div>
            {
                blogBody?.map((n, i) => {
                    const {type, header, title, text, list, numbered} = n
                    if (type == 'paragraph') {

                        return n.header.length ? (<Paragraph text={text} header={header} />) : (<Paragraph text={text} />)
                    }
                    if (n.type == 'list') {
                        return title.length ? <List list={n.list} title={title} /> : <List list={list} numbered={numbered} />
                    }

                    if (type == 'secondary-header') {
                        return <SecondaryHeader text={text} />
                    }
                })
            }
        </div>
    )
}

export default Cblog