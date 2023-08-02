const CheckboxGroup = () => {
  return (
    <fieldset>
      <legend className="sr-only">Notifications</legend>
      <div className="space-y-5">
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label
              htmlFor="comments"
              className="text-xs font-semibold leading-6 text-gray-400"
            >
              Comments
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="candidates"
              aria-describedby="candidates-description"
              name="candidates"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label
              htmlFor="candidates"
              className="text-xs font-semibold leading-6 text-gray-400"
            >
              Candidates
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="offers"
              aria-describedby="offers-description"
              name="offers"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label
              htmlFor="offers"
              className="text-xs font-semibold leading-6 text-gray-400"
            >
              Offers
            </label>
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default CheckboxGroup;
