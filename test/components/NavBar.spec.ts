import NavBar from "@/components/NavBar.vue"
import { mount } from "@vue/test-utils"
import { describe, expect, it } from "vitest"

describe("Navbar component", () => {
  it("render Navbar component", () => {
    const wrapper = mount(NavBar)

    const links = wrapper.findAll("a")

    expect(links.length).toBe(2)

    const logo = links[0]
    const sourceCode = links[1]

    expect(logo.text()).toBe("✈️ Airavlo")
    expect(sourceCode.text()).toBe("Source Code")
    expect(sourceCode.attributes("href")).toBe("https://github.com/aliemresavas/airavlo-vue")
  })
})
