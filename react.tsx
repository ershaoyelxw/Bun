function Component(props: {message: string}) {
  return (
    <div>
      <h1 style={{color: 'red'}}>{props.message}</h1>
    </div>
  );
}

console.log(<Component message="Hello world!!!" />);
