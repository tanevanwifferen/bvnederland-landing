import React, { Component, Fragment } from 'react'
import { getTwitterFollowers } from '../lib/db'
import DiscussionBox from './discourse_discussion'

export default class JoinBody extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: ''
    }
  }

  componentDidMount () {
    getTwitterFollowers().then(obj => {
      this.setState({ count: obj })
    })
  }

  render () {
    return (
      <>
        <div className='home-body'>
          <section className='section'>
            <div className='columns has-text-centered'>
              <div className='column is-6 is-offset-3'>
                <h3 className='title emp'>Kom bij de beweging</h3>
                <h4 className='subtitle'>
                  Dit is meer dan een politieke partij, het is een visie.
                  <br />
                  Wij gaan dit een beetje anders doen.
                </h4>
              </div>
            </div>
            <br /> <br />
            <div className='columns'>
              <div className='column is-4 is-offset-2'>
                <br />
                <h2 className='title'>Doe Mee</h2>
                <h3 className='subtitle'>
                  Onze beweging is een doe-mee-cratie. Vraag geen toestemming.
                  Jij bent de beweging. We werken samen aan dezelfde visie.
                </h3>
                <p>
                  BV Nederland is een beweging van mensen die voor een nieuwe
                  politiek in Nederland pleiten, met meer democratie, meer op de
                  mens gericht en met een vrijheidsdividend van 1.000 euro per
                  maand. We zijn op zoek naar mensen die dezelfde visie voor
                  Nederland hebben en mee willen doen aan deze nationale
                  beweging. Om samen toe te werken naar een overwinning tijdend
                  de Tweede Kamerverkieingen in 2021. Stap voor stap.{' '}
                </p>
              </div>
              <div className='column is-4'>
                <div className='box'>
                  <div className='card-content'>
                    <h2 className='title'>Onze Nieuwsbrief</h2>
                    <p>
                      Abonneer je op de nieuwsbrief met wekelijkse updates en
                      tips!
                    </p>
                  </div>
                  <div className='card-footer-item'>
                    <div className='field has-addons'>
                      {/* <div className="control is-medium">
                      <input
                        className="input script"
                        type="text"
                        placeholder="Meld je aan"
                      />
                    </div> */}
                      <div className='control'>
                        <iframe
                          width='480'
                          height='400'
                          src='https://wijzijnbv.substack.com/embed'
                          frameBorder='0'
                          scrolling='no'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br /> <br />
            <div className='columns '>
              <div className='column is-6 is-offset-3'>
                <h3 className='title emp'>Ons doel</h3>
                <h4 className='subtitle'>
                  We streven naar <strong>250.000 stemmen</strong> in de Tweede
                  Kamerverkiezingen van 2021.
                  <br />
                  De helft van alle Nederlanders is voor een vrijheidsdividend
                  van 1.000 euro per maand. <br /> Help ons stap voor stap, doel
                  voor doel, daar te komen! <br />
                  <br />
                  <strong>
                    En dit alles begint allemaal op het forum, dus kom mee
                    praten! <br />
                    We willen met jou denken!{' '}
                  </strong>
                </h4>

                <br />
                <span className='help is-pulled-left'>
                  Nu: {this.state.count} Volgers
                </span>
                <span className='help is-pulled-right'>
                  Goal: 200 Volgers op Twitter{' '}
                </span>
                <progress
                  className='progress is-large'
                  value={this.state.count}
                  max='200'
                >
                  60%
                </progress>
                <br />
              </div>
            </div>
            <div className='columns goalBox'>
              <div className='column is-2 is-offset-3 '>
                <div className='box currentGoal'>
                  <p className='subtitle'>
                    200 volgers op Twitter!
                    <br />
                    <br />
                    <br />
                  </p>
                  <center>
                    <a
                      href='https://twitter.com/wijzijnbv'
                      className='button is-primary is-large marginfix'
                    >
                      <i className='fab fa-twitter' />
                    </a>

                    {/* <a
                      href="https://instagram.com/wijzijnbv"
                      className="button is-primary is-large"
                    >
                      <i className="fab fa-instagram"></i>
                    </a> */}
                  </center>
                </div>
              </div>
              <div className='column is-2'>
                <div className='box'>
                  <p className='subtitle'>
                    100 hashtag-mentions van #wijzijnbv of #mijndividend!
                  </p>
                  <br />
                  <center>
                    <a
                      href='https://twitter.com/intent/tweet?button_hashtag=wijzijnbv&ref_src=twsrc%5Etfw'
                      className='button is-primary is-large marginfix'
                    >
                      #WijZijnBV
                    </a>
                  </center>
                </div>
              </div>
              <div className='column is-2'>
                <div className='box'>
                  <p className='subtitle'>
                    50 kernteam mensen die met ons meedenken in de forum!{' '}
                  </p>
                  <br />
                  <center>
                    <a
                      href='https://forum.bvnederland.nu'
                      className='button is-primary is-large marginfix'
                    >
                      <i className='fab fa-discourse' />
                    </a>
                  </center>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className='columns has-text-centered'>
              <div className='column is-8 is-offset-2'>
                <h3 className='title emp'>Je hebt geen toestemming nodig</h3>
                <h4 className='subtitle'>
                  De visie en tactieken van de campagne zijn transparant.
                  <br />
                  Je kunt zelf meepraten om de visie van de partij te vormen!
                  <br />
                  <strong>Kijk wat de laatste posts op ons forum zijn:</strong>
                </h4>
              </div>
            </div>
            <DiscussionBox />
            <div className='columns has-text-centered'>
              <div className='column is-6 is-offset-3'>
                <a
                  href='https://forum.bvnederland.nu'
                  className='button is-primary is-large'
                >
                  Praat Mee
                </a>
              </div>
            </div>
          </section>
        </div>

        <style jsx>{`
          .home-body {
            background: white;
          }

          .marginfix {
            margin-right: 10px;
          }

          .currentGoal {
            background-color: orange;
          }

          .otext {
            color: orange;
          }

          .siggy {
            display: flex;
            align-items: flex-end;
          }

          .goalBox .column .box {
            min-height: 220px;
          }

          // .fab,
          // .fas,
          // .far {
          //   font-size: 3.5rem;
          // }
        `}
        </style>
      </>
    )
  }
}
