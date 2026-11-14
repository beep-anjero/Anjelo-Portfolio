export function Terminal() {
  return (
    <div className="terminal">
      <div className="terminal-bar">
        <div className="traffic">
          <i />
          <i />
          <i />
        </div>
        <span>anjelo@portfolio — ~/workspace</span>
      </div>
      <div className="terminal-body">
        <p>
          <b>$</b> whoami
        </p>
        <p className="output">Jullian Anjelo C. Vidal</p>
        <p>
          <b>$</b> cat focus.txt
        </p>
        <p className="output">
          Full-stack systems · thoughtful interfaces
          <br />
          reliable data · useful software
        </p>
        <p>
          <b>$</b> status
        </p>
        <p className="output">
          <span className="status-dot" />
          available for internship opportunities
        </p>
        <p>
          <b>$</b> <span className="cursor">_</span>
        </p>
      </div>
    </div>
  );
}
