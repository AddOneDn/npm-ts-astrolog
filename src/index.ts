class AstroLog {
  wrapperText: string | number;
  wrapperLine: string;
  constructor(text?: string | number) {
    this.wrapperText = text ? text : '#';
    this.wrapperLine = `${this.wrapperText}`.repeat(10);
  }
  log(content: any): void {
    console.log(this.wrapperLine + '\n');
    console.log(content);
    console.log('\n' + this.wrapperLine);
  }
  logc(content: any, style: string): void {
    console.log(`%c${content}`, style);
  }
}

export default AstroLog;
