import React from 'react'
import { Description, Title } from '../style/style'
import { Container, PhotoContainer } from './style'
import Percentage from "../../assets/images/Percentage_of_English_speakers_by_country_and_dependency_as_of_2014.svg_auto_x2__1_-removebg.png"
import PercentageNative from "../../assets/images/Percentage_of_Native_Speakers.png"
import PercentageSchool from "../../assets/images/1280px-Countries_in_which_English_Language_is_a_Mandatory_or_an_Optional_Subject.svg.png"
function GrammarsHome() {
    return (
        <>
            <Container>
                <Title>About English Language</Title>
                <Description>
                    <p>
                        English is a West Germanic language of the Indo-European language family, with its earliest
                        forms spoken by the inhabitants of early medieval England.
                        It is named after the Angles, one of the ancient Germanic peoples that migrated to the island of Great Britain. English is genealogically West Germanic, closest related to the Low Saxon and Frisian languages; however, its
                        vocabulary is also distinctively influenced by dialects of French (about 29% of modern English words) and Latin (also about 29%), plus some grammar
                        and a small amount of core vocabulary influenced by Old Norse (a North Germanic language). Speakers
                        of English are called Anglophones
                    </p>
                    <p className='title'>History of English language</p>
                    <p>
                        The earliest forms of English, collectively known as Old English, evolved from a
                        group of West Germanic (Ingvaeonic) dialects brought to Great Britain by Anglo-Saxon
                        settlers in the 5th century and further mutated by Norse-speaking Viking settlers starting
                        in the 8th and 9th centuries. Middle English began in the late 11th century after the Norman conquest
                        of England, when considerable French (especially Old Norman) and Latin-derived vocabulary
                        was incorporated into English over some three hundred years.
                        Early Modern English began in the late 15th century with the start of the Great
                        Vowel Shift and the Renaissance trend of borrowing further Latin and Greek words and roots
                        into English, concurrent with the introduction of the printing press to London. This era notably culminated
                        in the King James Bible and plays of William Shakespeare
                    </p>

                </Description>
                <Title>
                    Geographical Distribution
                </Title>
                <PhotoContainer>
                    <p >Percentage of English speakers by country and dependency (2014) </p>
                    <img src={Percentage} alt='qwerty' />

                </PhotoContainer>
                <PhotoContainer>
                    <p>Percentage of English native speakers (2017)</p>
                    <img src={PercentageNative} alt="qwertyui" />
                </PhotoContainer>
                <PhotoContainer>
                    <p>Countries in which English Language is a Mandatory or an Optional Subject</p>
                    <img src={PercentageSchool} alt="qwertyui" />
                    <li> 🟦 English is a mandatory subject</li>
                    <li> 🟨 English is an optional subject</li>
                </PhotoContainer>
                <Title>English Grammar</Title>
                <Description>
                    <p>
                        English grammar is the set of structural rules of the English language. This includes the structure of words, phrases, clauses, sentences, and whole texts.
                    </p>
                    <p>
                        This article describes a generalized, present-day Standard English – a form of speech and writing used in public discourse, including broadcasting, education, entertainment, government, and news, over a range of registers, from formal to informal. Divergences from the grammar described here occur in some historical, social, cultural, and regional varieties of English, although these are more minor than differences in pronunciation and vocabulary.
                    </p>
                    <p>
                        Modern English has largely abandoned the inflectional case system of Indo-European in favor of analytic constructions. The personal pronouns retain morphological case more strongly than any other word class (a remnant of the more extensive Germanic case system of Old English). For other pronouns, and all nouns, adjectives, and articles, grammatical function is indicated only by word order, by prepositions, and by the "Saxon genitive or English possessive" (-'s).
                    </p>
                    <p>
                        We considered dusting off the dictionary and going from A1 to Zyzzyva, however, there are an estimated 171,146 words currently in use in the English language, according to the Oxford English Dictionary, not to mention 47,156 obsolete words
                    </p>
                </Description>
                <h5>From Wikipedia</h5>
            </Container>
        </>
    )
}

export default GrammarsHome