interface SkillProps {
    content:{
        title: string
    }
}
export function Skill({content}:SkillProps){
    return(
        <div className='w-[80%] sm:w-1/3 bg-cinzaFooter dark:bg-neutral-900 dark:text-stone-300 rounded-lg p-6 text-center font-semibold'>
            <p>{content.title}</p>
        </div>
    )
}