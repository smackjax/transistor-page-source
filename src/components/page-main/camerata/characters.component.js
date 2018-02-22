import React from 'react';
import SectionBlock from '../_section/section.component';
import {
    AsherKendrell,
    GrantKendrell,
    RoyceBracket,
    SybilReisz
} from '../../_character-images';

import {
    CharacterCardWrapper,
    CharacterCardPic,
    CharacterCardDescription
} from './character-card';
import './characters.style.css';


const CamerataSection = ()=>(
    <SectionBlock 
    className="camerata-section"
    >
        <h2
        style={{
            margin: "20px auto 5px"
        }}>
            <span className="text-red">The Camerata </span>
        </h2>
        <div className="cards-outer-wrapper">
            <CharacterCardWrapper>
                <CharacterCardPic src={AsherKendrell} alt="Asher Kendrell picture" />

                
                <CharacterCardDescription>
                <span className="text-red text-techy"><h3>Asher ||</h3></span>
                Most children learn to stop asking 'why', but Mr. Asher Kendrell never outgrew it. His hunger for knowledge and his eagerness to spread it made him a prolific writer, who enjoyed a career as a culture-and-current-events editor for OVC. When Mr. Kendrell wasn't busy reporting, he occupied himself studying the history of his city. But the deeper he delved, the more frustrated he became with all the dead ends and contradictions.
                </CharacterCardDescription>
            </CharacterCardWrapper>

            <CharacterCardWrapper>
                <CharacterCardPic src={GrantKendrell} alt="Grant Kendrell picture" />

                <CharacterCardDescription>
                <span className="text-red text-techy"><h3>Grant ||</h3></span>
                Administrator Kendrell was one of the longest-tenured public servants in the administration's recorded history. More than two younger generations of administrators came and went as he remained on the job. His abilities as a judicious and sharp-minded administrator never faltered as his age advanced, so instead, his constituency's respect for him only grew. By contrast, Administrator Kendrell found his own feelings beginning to change.
                </CharacterCardDescription>
            </CharacterCardWrapper>

            <CharacterCardWrapper>
                <CharacterCardPic src={RoyceBracket} alt="Royce Bracket picture" />

                <CharacterCardDescription>
                <span className="text-red text-techy">
                    <h3>Royce ||</h3>
                </span>
                Once there was a great engineer. Arithmetic was his medium and a city was his canvas. He planned the roads, buildings, and byways. His work could not be more precise. Like everyone in Cloudbank, he served at the pleasure of the city's people. The city changed quickly and often, reconfiguring to best suit the contemporary sensibility. Thus the engineer's work was ephemeral. He loved his craft, but could not let himself become attached to the product of his effort.
                </CharacterCardDescription>
            </CharacterCardWrapper>

            <CharacterCardWrapper>
                <CharacterCardPic src={SybilReisz} alt="Sybil Reisz picture" />
                <CharacterCardDescription>
                <span className="text-red text-techy"><h3>Sybil ||</h3></span>
                    Known in elite social circles throughout Cloudbank, Ms. Sybil Reisz organized many of the city's popular public events, from ground-breaking ceremonies to contemporary festivals. She was everywhere, and yet somehow she made time to lead a second, hidden life. As one of the Camerata, Ms. Reisz was responsible for gathering information about potential high-value targets, people who could contribute to their cause. She did this job to perfection, drawing no notice, though one target in particular caused her much frustration.
                </CharacterCardDescription>
            </CharacterCardWrapper>
        </div>

    </SectionBlock>
)

export default CamerataSection;