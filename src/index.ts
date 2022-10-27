export default function main (logger: any) {
  logger.log('Hello world')
}
if (require.main === module) {
  main(console)
}
