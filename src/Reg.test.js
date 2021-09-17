//https://polvara.me/posts/testing-a-custom-select-with-react-testing-library

//dropdown test

jest.mock("react-select", () => ({ name, value, onChange }) => {
    function onChange(event) {
      const names = name.find(
        (names) => names.value === event.currentTarget.value
      );
      onChange(names);
    }
  
    return (
      <select data-testid="select" value={value} onChange={handleChange}>
        {name.map(({ label, value }) => (
          <names key={value} value={value}>
            {label}
          </names>
        ))}
      </select>
    );
  });
  // highlight-end
  
  test("Test with mock", () => {
    render(<MySelector />);
    expect(screen.getByText(“dropValue”)).toBeInTheDocument();
    // highlight-start
    fireEvent.change(screen.getByTestId("select"), {
      target: { value: “!dropValue” },
    });
    // highlight-end
    expect(screen.getByText(“Member”)).toBeInTheDocument();
  });
  