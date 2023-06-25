export default function SectionOne() {
  return (
    <div className="w-full pb-12 flex flex-row gap-2">
      <div className="w-3/4 flex flex-col space-y-4">
        <img src="/detaiImage.jpg" alt="image" className="h-max w-max" />
        {/* <span className="bg-gray-300 shadow-md h-96" /> */}
        <h1 className="font-bold text-2xl">
          Declan Rice: Will West Ham and England midfielder join Man City or
          Arsenal?
        </h1>
        <p className="font-medium">
          <a className="text-slate-500">23 June 2023</a>
          <br />
          By Emlyn Begley & Andy Cryer <br />{" "}
        </p>

        <p className="pr-4">
          Premier League runners-up Arsenal thought they had their man a few
          days ago but, as they continue to haggle over the price with West Ham,
          Treble-winners Manchester City look ready to move with a bid of their
          own. <br />
          <br />
          The England midfielder, fresh off the back of becoming only the third
          West Ham captain to lift a trophy, looks set to become the second most
          expensive Englishman ever after Jack Grealish with the Hammers
          seemingly wanting at least £90m.
          <br />
          <br />
          His last game for West Ham saw him lead them to the Europa Conference
          League crown with a 2-1 win over Fiorentina.
          <br />
          <br />
          The 24-year-old would likely become Arsenal's record capture, beating
          Nicolas Pepe's £75m signing, or Man City's second-most expensive
          signing after Grealish.
          <br />
          <br />
          BBC Sport's Simon Stone said: "Arsenal, clearly, are in pole position.
          It is felt most of the negotiation around the transfer from a player
          perspective is done.
          <br />
          <br />
          "Man City's interest is real though, even if, with Rodri, Mateo
          Kovacic and Kalvin Phillips, they are not exactly short of central
          midfield options, despite the departure of Ilkay Gundogan for
          Barcelona. It would be easy, for instance, to see David Moyes being
          interested in Phillips, even though the England man says he is
          committed to City.
          <br />
          <br />
          "Arsenal's problem is this; they can feel confident in their position,
          continue to chip away at West Ham and hope eventually, the answer is
          'yes'. But that comes with risk. What if Pep Guardiola makes a
          persuasive pitch? Would Rice really turn down the Treble winners, who
          have the ability to pay more than Arsenal because they generate more
          income?
          <br />
          <br />
          "It is easy to dismiss the current situation as [West Ham] owner David
          Sullivan trying to drive up the price of a player he knows is leaving.
          However, for Arsenal, the stakes are high - and they need to get their
          reaction right."
          <br />
          Losing Rice to their title rivals would clearly be a big blow for the
          Gunners, but why is he in such demand and where would he fit best?{" "}
        </p>
      </div>
      <div className="w-1/4 flex flex-col gap-2 bg-slate-300 p-4">
        <div>
          <img src="/detail-1.jpg" alt="image" className="h-max w-max" />
          <p>An upgrade on Eriksen at Old Trafford?</p>
        </div>
        <div>
          <img src="/detail-2.jpg" alt="image" className="h-max w-max" />
          <p>
            Mason Mount: What would the England midfielder bring to Manchester
            United?
          </p>
        </div>
        <div>
          <img src="/detail-4.jpg" alt="image" className="h-max w-max" />
          <p>
            {" "}
            Haaland, Bellingham, Vinicius, Mbappe: Who will win the 2024 Ballon
            d'Or?
          </p>
        </div>
      </div>
    </div>
  );
}
