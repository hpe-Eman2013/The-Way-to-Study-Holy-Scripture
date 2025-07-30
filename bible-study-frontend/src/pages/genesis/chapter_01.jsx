import React from "react";
import { Link } from "react-router-dom";

export default function Chapter01() {
  return (
    <div className="lecture">
      <header>
        <h1>Genesis Chapter 1</h1>
        <p>In the beginning Yahuah Elohim created the heavens and the earth.</p>
      </header>

      <section id="reading-assignment">
        <h2>📚 Reading Assignment</h2>
        <p>
          The Genesis Chapter 1 lecture and quiz are based on the following readings. Be sure to read each carefully before attempting the quiz:
        </p>
        <ul>
          <li><strong>Genesis 1:1–31</strong></li>
          <li><strong>Genesis 2:1–3</strong></li>
          <li><strong>Jubilees 2:1–17</strong></li>
          <li><strong>1 Enoch 71:1–5</strong></li>
          <li><strong>Isaiah 60:19</strong></li>
          <li><strong>Jeremiah 31:35</strong></li>
          <li><strong>Revelation 22:5</strong></li>
          <li><strong>2 Corinthians 4:6</strong></li>
        </ul>
      </section>

      <section id="day1-lecture">
        <h2>Day 1 - The Light and the Heavens</h2>
        <p>
          In the beginning, Yahuah, the Most High Elohim, initiated the divine act of creation. Before the sun, before the moon, and before even the stars were appointed to their circuits, Yahuah said, "Let there be light," and there was light. This was no ordinary light—it was the foundational essence that divided order from chaos, clarity from obscurity.
        </p>

        <p>
          <strong>Genesis 1:3–5</strong> tells us that Elohim saw the light and declared it good. He separated it from the darkness, naming the light Day and the darkness Night. But light was not the only thing that came into being on that first day. According to <strong>Jubilees 2:2</strong>, Yahuah also created the heavenly spirits: the angels of the presence, angels of sanctification, and the spiritual forces of fire and wind. The invisible realm was prepared to serve in the administration of Yahuah's creation.
        </p>

        <p>
          <strong>1 Enoch 71:1–5</strong> reveals a majestic vision experienced by Enoch, where the righteous angels were seen treading upon flames of fire, clothed in garments white as snow. Their radiant presence echoed the first great separation of light from darkness, a celestial order affirming Yahuah's sovereignty.
        </p>

        <p>
          The prophets echo this divine illumination. <strong>Isaiah 60:19</strong> promises that Yahuah will be to His people an everlasting light, and <strong>Jeremiah 31:35</strong> testifies that it was Yahuah who established the ordinances of light by His own authority. In <strong>Revelation 22:5</strong>, this truth reaches its eternal fulfillment—there is no need for a lamp or sun, for Yahuah Himself will give light to His people forever.
        </p>

        <p>
          Even the apostle Paul affirms in <strong>2 Corinthians 4:6</strong> that the same Elohim who commanded light to shine out of darkness has now illuminated our hearts with the knowledge of His glory through Messiah.
        </p>

        <p>
          Thus, Day 1 was more than the beginning of time—it was the unveiling of Yahuah’s order, purpose, and divine presence. A stage was set for all that would follow, anchored in light, spirit, and distinction.
        </p>
      </section>

      <p>
        <Link to="/quiz/genesis-chapter-01-quiz-01.html" className="btn">
          📝 Take the Genesis Chapter 1 Quiz
        </Link>
      </p>
    </div>
  );
}
