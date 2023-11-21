function IF({children, condition, else = null}) {
  if (condition) {
    // render children if the condition is truthy
    return children;
  }

  return else;
}

/**
 * Use the component as follows:
 *
 * <IF condition={condition}>
 *   <Greeter username={user.name} />
 * </IF>
 *
 * With 'else' prop, equivalent to
 * {condition ? <Greeter  username={user.name} /> : <LoginButton />}
 *
 * const renderElse = () => <LoginButton />
 * <IF condition={condition} else={renderElse}>
 *   <Greeter username={user.name} />
 * </IF>
 *
 *
 */